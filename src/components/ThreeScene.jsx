import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene({ mouse }) {
  const mountRef = useRef();

  useEffect(() => {
    const W = window.innerWidth, H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 1000);
    camera.position.set(0, 0, 45);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(20, 30, 10);
    scene.add(mainLight);

    const colors = [0x4285F4, 0xEA4335, 0xFBBC05, 0x34A853];
    const shapes = [];

    const geometries = [
      new THREE.SphereGeometry(3, 40, 40),
      new THREE.CapsuleGeometry(2, 4, 32, 32),
      new THREE.TorusGeometry(2.5, 1.1, 20, 100),
      new THREE.BoxGeometry(4, 4, 4)
    ];

    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length];
      const mat = new THREE.MeshPhysicalMaterial({
        color: colors[i % colors.length],
        roughness: 0.1,
        metalness: 0.2,
        transmission: 0.8,
        ior: 1.5,
        thickness: 0.5,
        specularIntensity: 1,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60,
        -15 - (Math.random() * 30) // Consistently in the background
      );

      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      const scale = 0.8 + Math.random() * 1.2;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        rotX: (Math.random() - 0.5) * 0.01,
        rotY: (Math.random() - 0.5) * 0.01,
        floatSpeed: 0.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    let raf;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      shapes.forEach((mesh) => {
        const { rotX, rotY, floatSpeed, phase } = mesh.userData;
        mesh.position.y += Math.sin(t * floatSpeed + phase) * 0.005;
        mesh.rotation.x += rotX;
        mesh.rotation.y += rotY;
      });

      const tx = mouse.current.x * 3;
      const ty = mouse.current.y * 3;
      camera.position.x += (tx - camera.position.x) * 0.03;
      camera.position.y += (-ty - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      if (mountRef.current?.contains(renderer.domElement))
        mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }} />;
}
