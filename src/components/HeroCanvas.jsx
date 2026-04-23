import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * HeroCanvas
 * Minimal, performance-friendly Three.js background:
 *   • A slowly rotating wireframe icosphere (the "industrial core")
 *   • A starfield of subtle particles in brand colors
 *   • Mouse parallax (disabled on touch)
 *
 * No post-processing, no heavy loaders → ~20KB gzipped of Three.js features used.
 */
export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    // --- Scene & camera ---
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100)
    camera.position.z = 7

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // --- Wireframe icosphere (the core) ---
    const geo = new THREE.IcosahedronGeometry(2.2, 2)
    const wire = new THREE.WireframeGeometry(geo)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2E6BFF,
      transparent: true,
      opacity: 0.45,
    })
    const sphere = new THREE.LineSegments(wire, lineMat)
    scene.add(sphere)

    // Inner glow sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7A4FFF,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const innerSphere = new THREE.Mesh(innerGeo, innerMat)
    scene.add(innerSphere)

    // --- Particle field ---
    const particleCount = 420
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const brandColors = [
      new THREE.Color(0x2E6BFF),
      new THREE.Color(0x7A4FFF),
      new THREE.Color(0x20D5A5),
    ]
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14
      const c = brandColors[Math.floor(Math.random() * brandColors.length)]
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // --- Mouse parallax ---
    const mouse = { x: 0, y: 0 }
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMove)

    // --- Resize ---
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // --- Animate ---
    let raf = 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const tick = () => {
      if (!prefersReduced) {
        sphere.rotation.y += 0.0018
        sphere.rotation.x += 0.0008
        innerSphere.rotation.y -= 0.0022
        innerSphere.rotation.z += 0.0012
        particles.rotation.y += 0.0006
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02
        camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02
        camera.lookAt(scene.position)
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      geo.dispose(); wire.dispose(); innerGeo.dispose(); particleGeo.dispose()
      lineMat.dispose(); innerMat.dispose(); particleMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10 opacity-80"
      aria-hidden="true"
    />
  )
}
