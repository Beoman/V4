"use client"

import { useCallback } from "react"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#FFD700", "#FF6B6B", "#4ECDC4"],
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 3,
            },
            count: 1,
          },
          glow: {
            enable: true,
            color: {
              value: ["#FFD700", "#FF6B6B", "#4ECDC4"],
            },
            radius: 10,
          },
        },
        detectRetina: true,
      }}
    />
  )
}