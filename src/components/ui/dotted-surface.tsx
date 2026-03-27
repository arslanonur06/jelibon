"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

/**
 * Animated Three.js point grid background. Lives in `src/components/ui` (shadcn convention).
 * Requires `ThemeProvider` from `next-themes` (see `src/components/theme-provider.tsx`).
 */
export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;

    const isDark = resolvedTheme !== "light";

    const SEPARATION = 150;
    const isSmallScreen = window.innerWidth < 640;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const shouldAnimate = !isSmallScreen && !prefersReducedMotion;
    const AMOUNTX = isSmallScreen ? 30 : 40;
    const AMOUNTY = isSmallScreen ? 40 : 60;

    const scene = new THREE.Scene();
    const fogColor = 0x050510;
    scene.fog = new THREE.Fog(fogColor, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setClearColor(0x000000, 0);

    const setSize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    setSize();

    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        if (isDark) {
          colors.push(0.55, 0.45, 0.75);
        } else {
          colors.push(0.1, 0.1, 0.12);
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3),
    );

    const material = new THREE.PointsMaterial({
      size: 6.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.52,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const positionAttribute = geometry.attributes.position;
    const pos = positionAttribute.array as Float32Array;

    const computeWave = (count: number) => {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3;
          const a = Math.sin((ix + count) * 0.3) * 50;
          const b = Math.sin((iy + count) * 0.5) * 50;
          const c = Math.sin((ix + iy) * 0.15 + count * 0.35) * 35;
          const d = Math.cos(ix * 0.2 - iy * 0.25 + count * 0.28) * 28;
          pos[index + 1] = a + b + c + d;
          i++;
        }
      }
      positionAttribute.needsUpdate = true;
    };

    // Always render at least once so the background is visible.
    computeWave(0);
    renderer.render(scene, camera);

    let isAnimating = false;
    if (shouldAnimate) {
      isAnimating = true;
      let count = 0;
      /** Classic “wavy sea of points” motion (sin cross-terms + diagonal wave). */
      let lastComputeTs = 0;
      const animate = (ts: number) => {
        rafRef.current = requestAnimationFrame(animate);
        // Throttle heavy position recomputation to ~30fps.
        if (ts - lastComputeTs < 33) return;
        lastComputeTs = ts;

        computeWave(count);
        renderer.render(scene, camera);
        count += 0.1;
      };
      rafRef.current = requestAnimationFrame(animate);
    }

    let resizeRaf = 0;
    const handleResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        setSize();
        if (!isAnimating) renderer.render(scene, camera);
      });
    };
    window.addEventListener("resize", handleResize);
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme, mounted]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-[1] overflow-hidden",
        className,
      )}
      aria-hidden
      {...props}
    />
  );
}
