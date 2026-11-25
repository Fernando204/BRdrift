import { Raycaster, Vector2 } from 'three';
import { $ } from '../utils/Helpers.js';

const CENTER = new Vector2(0, 0);
const MAX_DISTANCE = 7;
const CHECK_INTERVAL = 0.08;
const PALETTE = ['#e7e7e3', '#c4161c', '#1f4fb5', '#f2b705', '#1b1b1d', '#2e8b57', '#f28c28', '#8e44ad', '#ffffff', '#777777'];
const HIGHLIGHT = 0x426b91;

/** Seleciona peças configuradas do veículo e controla a prévia individual de cor. */
export class VehicleCustomization {
  constructor({ canvas, getCamera, getVehicle, getPlayerBody, onOpenChange, onInteract }) {
    this.canvas = canvas;
    this.getCamera = getCamera;
    this.getVehicle = getVehicle;
    this.getPlayerBody = getPlayerBody;
    this.onOpenChange = onOpenChange;
    this.onInteract = onInteract;
    this.raycaster = new Raycaster();
    this.active = false;
    this.editMode = true;
    this.open = false;
    this.elapsed = 0;
    this.hovered = null;
    this.selected = null;
    this.vehicle = null;
    this.panel = $('customPanel');
    this.colorInput = $('customColor');
    this.hexInput = $('customHex');
    this.#bindEvents();
  }

  #bindEvents() {
    this.canvas.addEventListener('pointerdown', this.#onPointerDown, true);
    this.colorInput.addEventListener('input', () => this.#applyColor(this.colorInput.value));
    this.hexInput.addEventListener('change', () => {
      const value = this.hexInput.value.trim();
      if (!/^#[\da-f]{6}$/i.test(value)) {
        this.hexInput.setCustomValidity('Use um hexadecimal no formato #RRGGBB.');
        this.hexInput.reportValidity();
        return;
      }
      this.hexInput.setCustomValidity('');
      this.#applyColor(value);
    });
    $('customPalette').addEventListener('click', e => {
      const button = e.target.closest('button[data-color]');
      if (button) this.#applyColor(button.dataset.color);
    });
    $('customReset').addEventListener('click', () => {
      if (this.selected) this.#applyColor(this.selected.originalColor);
    });
    $('customClose').addEventListener('click', () => this.close(true));
    $('customDone').addEventListener('click', () => this.close(true));
  }

  #onPointerDown = event => {
    if (!this.active || this.open || event.button !== 0) return;
    const target = this.#findTarget();
    if (this.editMode && target?.part) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.#open(target.part);
    } else if (!this.editMode && target?.action) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.onInteract?.(target.action, target);
    }
  };

  setEditMode(enabled) {
    if (this.editMode === enabled) return;
    this.editMode = enabled;
    this.#setHovered(null);
    this.elapsed = 0;
  }

  setActive(active) {
    this.active = active;
    $('aim').hidden = !active || this.open;
    if (!active && !this.open) this.#setHovered(null);
  }

  update(dt) {
    const vehicle = this.getVehicle();
    if (vehicle !== this.vehicle) {
      this.#setHovered(null);
      this.vehicle = vehicle;
      this.elapsed = 0;
    }
    if (!this.active || this.open || !vehicle) return;
    this.elapsed -= dt;
    if (this.elapsed <= 0) {
      this.elapsed = CHECK_INTERVAL;
      const target = this.#findTarget();
      this.#setHovered(target && (this.editMode || target.action === 'toggleDoor') ? target.part : null);
    }
  }

  #findTarget() {
    const vehicle = this.getVehicle(), camera = this.getCamera(), body = this.getPlayerBody();
    if (!vehicle || !camera || !body) return null;
    if (Math.hypot(body.x - vehicle.root.position.x, body.z - vehicle.root.position.z) > MAX_DISTANCE + 2.5) return null;
    camera.updateMatrixWorld(true);
    vehicle.model.updateMatrixWorld(true);
    this.raycaster.setFromCamera(CENTER, camera);
    this.raycaster.far = MAX_DISTANCE;
    const hits = this.raycaster.intersectObject(vehicle.model, true);
    const first = hits[0];
    if (!first || first.distance > MAX_DISTANCE) return null;
    let part = null, action = null;
    for (let object = first.object; object; object = object.parent) {
      part ||= object.userData.customizablePart;
      action ||= object.userData.vehicleInteraction;
      if (object === vehicle.model) break;
    }
    return { part, action, object: first.object, distance: first.distance };
  }

  #setHovered(part) {
    if (part === this.hovered || this.open) return;
    this.#highlight(this.hovered, false);
    this.hovered = part;
    this.#highlight(part, true);
  }

  #highlight(part, enabled) {
    if (!part) return;
    if (enabled) {
      if (part.highlightState) return;
      part.highlightState = part.materials.map(material => ({
        material,
        emissive: material.emissive?.clone(),
        intensity: material.emissiveIntensity,
      }));
      for (const state of part.highlightState) {
        if (state.emissive) state.material.emissive.setHex(HIGHLIGHT), state.material.emissiveIntensity = Math.max(state.intensity, 0.45);
      }
    } else {
      for (const state of part.highlightState || []) {
        if (state.emissive) state.material.emissive.copy(state.emissive), state.material.emissiveIntensity = state.intensity;
      }
      delete part.highlightState;
    }
  }

  #open(part) {
    this.#setHovered(null);
    this.selected = part;
    this.#highlight(part, true);
    this.open = true;
    this.panel.hidden = false;
    $('customTitle').textContent = part.name;
    this.#renderPalette(part.colors || PALETTE);
    this.#applyColor('#' + part.paintMaterials[0].color.getHexString());
    $('aim').hidden = true;
    this.onOpenChange(true);
  }

  #renderPalette(colors) {
    const root = $('customPalette');
    root.replaceChildren();
    for (const color of colors) {
      if (!/^#[\da-f]{6}$/i.test(color)) continue;
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.color = color;
      button.title = color;
      button.setAttribute('aria-label', `Selecionar cor ${color}`);
      button.style.backgroundColor = color;
      root.appendChild(button);
    }
  }

  #applyColor(hex) {
    if (!this.selected || !/^#[\da-f]{6}$/i.test(hex)) return;
    for (const material of this.selected.paintMaterials) material.color.set(hex);
    this.colorInput.value = hex;
    this.hexInput.value = hex.toUpperCase();
    this.hexInput.setCustomValidity('');
  }

  close(relock = false) {
    if (!this.open) return;
    this.#highlight(this.selected, false);
    this.selected = null;
    this.open = false;
    this.panel.hidden = true;
    this.onOpenChange(false);
    this.elapsed = 0;
    $('aim').hidden = !this.active;
    if (relock && this.canvas.requestPointerLock) {
      const request = this.canvas.requestPointerLock();
      request?.catch?.(error => console.warn('Não foi possível capturar o mouse:', error));
    }
  }
}
