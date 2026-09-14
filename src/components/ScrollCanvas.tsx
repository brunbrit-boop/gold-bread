"use client";

import React, { useEffect, useRef } from "react";

const START_FRAME = 20;
const END_FRAME = 40;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1; // 21 frames (20 to 40)
const SCROLL_SPEED = 0.12; // Responsive and smooth lerp factor

function padStart(num: number, padString: string, length: number) {
  let str = num.toString();
  while (str.length < length) str = padString + str;
  return str;
}

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const reqRef = useRef<number>(0);
  const loadedRef = useRef(false);
  const firstFrameLoadedRef = useRef(false);

  // Preload frames 20 to 40
  useEffect(() => {
    let loadedCount = 0;
    const frames: HTMLImageElement[] = [];

    for (let i = START_FRAME; i <= END_FRAME; i++) {
      const img = new Image();
      const numStr = padStart(i, "0", 3);
      img.src = `/imagens/ezgif-frame-${numStr}.png`;
      img.onload = () => {
        loadedCount++;
        if (i === START_FRAME) {
          firstFrameLoadedRef.current = true;
        }
        if (loadedCount === TOTAL_FRAMES) {
          loadedRef.current = true;
        }
      };
      frames.push(img);
    }
    framesRef.current = frames;
  }, []);

  // Track scroll specifically along the pinned Hero Section track
  useEffect(() => {
    const handleScroll = () => {
      const track = document.getElementById("hero-track");
      let progress = 0;

      if (track) {
        const rect = track.getBoundingClientRect();
        const trackScrollableDistance = track.offsetHeight - window.innerHeight;
        if (trackScrollableDistance > 0) {
          const scrolled = -rect.top;
          progress = Math.min(Math.max(scrolled / trackScrollableDistance, 0), 1);
        }
      } else {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        if (maxScroll > 0) {
          progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
        }
      }

      // Map progress directly to frame fractional index [0 ... TOTAL_FRAMES - 1]
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Cinematic 60/120fps Animation Loop with Sub-frame Cross-Fade
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d", { alpha: false });

      if (canvas && ctx && (loadedRef.current || firstFrameLoadedRef.current)) {
        // High DPR support (capped at 2 for performance)
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        const targetWidth = Math.round(rect.width * dpr);
        const targetHeight = Math.round(rect.height * dpr);

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
          canvas.width = targetWidth;
          canvas.height = targetHeight;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Responsive, damped inertia (lerp)
        if (prefersReducedMotion) {
          currentFrameRef.current = targetFrameRef.current;
        } else {
          currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * SCROLL_SPEED;
        }

        // Snap if close to avoid idle jitter
        if (Math.abs(targetFrameRef.current - currentFrameRef.current) < 0.005) {
          currentFrameRef.current = targetFrameRef.current;
        }

        // Sub-pixel frame interpolation indices for seamless dissolving
        const clampedVal = Math.min(Math.max(currentFrameRef.current, 0), TOTAL_FRAMES - 1);
        const floorIdx = Math.floor(clampedVal);
        const ceilIdx = Math.min(floorIdx + 1, TOTAL_FRAMES - 1);
        const alpha = clampedVal - floorIdx;

        const img1 = framesRef.current[floorIdx] || framesRef.current[0];
        const img2 = framesRef.current[ceilIdx] || img1;

        if (img1 && img1.complete) {
          // Fill background with deep theme dark tone
          ctx.fillStyle = "#050505";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Calculate "cover" fit dimensions
          const imgRatio = img1.width / img1.height;
          const canvasRatio = canvas.width / canvas.height;
          let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

          if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          }

          // 1. Draw base frame
          ctx.globalAlpha = 1.0;
          ctx.drawImage(img1, offsetX, offsetY, drawWidth, drawHeight);

          // 2. Cross-fade blend next frame for buttery smooth, continuous motion
          if (alpha > 0.01 && ceilIdx !== floorIdx && img2 && img2.complete) {
            ctx.globalAlpha = alpha;
            ctx.drawImage(img2, offsetX, offsetY, drawWidth, drawHeight);
          }

          // Reset alpha
          ctx.globalAlpha = 1.0;

          // 3. Cinematic subtle radial vignette
          const gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            Math.max(canvas.width, canvas.height) / 1.4
          );
          gradient.addColorStop(0, "rgba(5, 5, 5, 0)");
          gradient.addColorStop(0.7, "rgba(5, 5, 5, 0.4)");
          gradient.addColorStop(1, "rgba(5, 5, 5, 0.85)");

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      reqRef.current = requestAnimationFrame(render);
    };

    reqRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(reqRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
}
