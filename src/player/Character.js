import { Group, Mesh, BoxGeometry, SphereGeometry, MeshStandardMaterial } from 'three';

/** Personagem simples (blocos) com pose sentada e animação de caminhada. */
export class Character {
  /** @param colors cores opcionais { skin, shirt, pants, hair } (passageiros do táxi variam) */
  constructor(colors = {}) {
    const skin = new MeshStandardMaterial({ color: colors.skin ?? 0xd8a07a, roughness: 0.7 });
    const shirt = new MeshStandardMaterial({ color: colors.shirt ?? 0x2f6fb5, roughness: 0.85 });
    const pants = new MeshStandardMaterial({ color: colors.pants ?? 0x2a2f3b, roughness: 0.9 });
    const hair = new MeshStandardMaterial({ color: colors.hair ?? 0x2a1c12, roughness: 0.9 });
    const shoes = new MeshStandardMaterial({ color: 0x151515, roughness: 0.6 });
    const box = (w, h, d, m, x, y, z) => {
      const o = new Mesh(new BoxGeometry(w, h, d), m);
      o.position.set(x, y, z);
      o.castShadow = true;
      return o;
    };
    const leg = sx => {
      const pivot = new Group();
      pivot.position.set(sx * 0.105, 0.92, 0);
      pivot.add(box(0.15, 0.84, 0.17, pants, 0, -0.42, 0), box(0.15, 0.08, 0.27, shoes, 0, -0.88, 0.05));
      return pivot;
    };
    const arm = sx => {
      const pivot = new Group();
      pivot.position.set(sx * 0.275, 1.47, 0);
      pivot.add(box(0.11, 0.58, 0.12, shirt, 0, -0.29, 0), box(0.09, 0.1, 0.1, skin, 0, -0.63, 0));
      return pivot;
    };
    const head = new Mesh(new SphereGeometry(0.125, 16, 12), skin);
    const hairCap = new Mesh(new SphereGeometry(0.132, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
    head.position.y = 1.67;
    hairCap.position.set(0, 1.685, -0.008);
    head.castShadow = true;

    this.legL = leg(1);
    this.legR = leg(-1);
    this.armL = arm(1);
    this.armR = arm(-1);
    this.root = new Group();
    this.root.add(
      box(0.42, 0.58, 0.24, shirt, 0, 1.2, 0), box(0.4, 0.12, 0.23, pants, 0, 0.93, 0), box(0.08, 0.08, 0.08, skin, 0, 1.53, 0),
      head, hairCap, box(0.03, 0.02, 0.02, hair, -0.045, 1.7, 0.118), box(0.03, 0.02, 0.02, hair, 0.045, 1.7, 0.118),
      this.legL, this.legR, this.armL, this.armR,
    );
  }

  /** Sentado no banco do motorista (dentro do modelo do carro). */
  sitIn(parent, seat) {
    parent.add(this.root);
    this.root.position.fromArray(seat.position);
    this.root.rotation.set(seat.tilt, 0, 0);
    this.root.scale.setScalar(seat.scale);
    this.legL.rotation.x = this.legR.rotation.x = -1.3;
    this.armL.rotation.x = this.armR.rotation.x = -1.05;
    this.armL.rotation.z = -0.15;
    this.armR.rotation.z = 0.15;
  }

  /** Em pé no mundo. */
  standIn(scene, x, z, heading) {
    scene.add(this.root);
    this.root.rotation.set(0, heading, 0);
    this.root.scale.setScalar(1);
    this.root.position.set(x, 0, z);
    this.armL.rotation.z = this.armR.rotation.z = 0;
  }

  /** Libera geometrias e materiais (passageiros que vão embora). */
  dispose() {
    this.root.removeFromParent();
    const seen = new Set();
    this.root.traverse(o => {
      if (!o.isMesh) return;
      o.geometry.dispose();
      if (!seen.has(o.material)) seen.add(o.material), o.material.dispose();
    });
  }

  /** Balanço de braços/pernas proporcional à velocidade. */
  animateWalk(phase, speed, x, z, heading) {
    const a = Math.sin(phase) * Math.min(0.7, Math.abs(speed) * 0.3);
    this.legL.rotation.x = a;
    this.legR.rotation.x = -a;
    this.armL.rotation.x = -a * 0.8;
    this.armR.rotation.x = a * 0.8;
    this.root.position.set(x, Math.abs(Math.cos(phase)) * Math.min(0.05, Math.abs(speed) * 0.012), z);
    this.root.rotation.y = heading;
  }
}
