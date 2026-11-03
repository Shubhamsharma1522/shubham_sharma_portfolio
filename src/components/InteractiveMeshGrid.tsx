import React, { useEffect, useRef, useState } from 'react';

interface InteractiveMeshGridProps {
  gridSize?: number;
  repulsionStrength?: number;
  radius?: number;
  dotSize?: number;
  gridThickness?: number;
  baseOpacity?: number;
  hoverColor?: string;
  gridColor?: string;
  dotColor?: string;
  backgroundColor?: string;
  cursorTrail?: boolean;
  trailColor?: string;
  trailLength?: number;
  style?: React.CSSProperties;
}

export const InteractiveMeshGrid: React.FC<InteractiveMeshGridProps> = ({
  gridSize = 60,
  repulsionStrength = -0.65,
  radius = 350,
  dotSize = 1.5,
  gridThickness = 0.5,
  baseOpacity = 0.09,
  hoverColor = 'rgb(0, 128, 255)',
  gridColor = 'rgb(255, 255, 255)',
  dotColor = 'rgb(255, 255, 255)',
  backgroundColor = 'transparent',
  cursorTrail = true,
  trailColor = 'rgb(138, 190, 255)',
  trailLength = 0.1,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const pointsMap = useRef<Map<string, { x: number; y: number; vx: number; vy: number; size: number; targetSize: number; brightness: number }>>(new Map());
  const mousePos = useRef<{ x: number; y: number } | null>(null);
  const trailPoints = useRef<Array<{ x: number; y: number; time: number }>>([]);
  const isMouseDown = useRef(false);

  const parseColor = (col: string) => {
    if (!col) return { r: 255, g: 255, b: 255, a: 1 };
    const rgba = col.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)/i);
    if (rgba) return { r: parseInt(rgba[1]), g: parseInt(rgba[2]), b: parseInt(rgba[3]), a: parseFloat(rgba[4]) };
    const rgb = col.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (rgb) return { r: parseInt(rgb[1]), g: parseInt(rgb[2]), b: parseInt(rgb[3]), a: 1 };
    return { r: 255, g: 255, b: 255, a: 1 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initGrid = () => {
      pointsMap.current.clear();
      const w = canvas.clientWidth || canvas.offsetWidth || 1;
      const h = canvas.clientHeight || canvas.offsetHeight || 1;
      canvas.width = w;
      canvas.height = h;

      for (let x = -gridSize; x < w + gridSize * 2; x += gridSize) {
        for (let y = -gridSize; y < h + gridSize * 2; y += gridSize) {
          const key = `${x},${y}`;
          pointsMap.current.set(key, {
            x,
            y,
            vx: 0,
            vy: 0,
            size: dotSize,
            targetSize: dotSize,
            brightness: 1
          });
        }
      }
    };

    initGrid();

    const getFalloff = (x: number, y: number) => {
      if (!mousePos.current) return 0;
      const dx = x - mousePos.current.x;
      const dy = y - mousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) return 0;
      return Math.pow(1 - dist / radius, 3.5);
    };

    const getRepulsion = (origX: number, origY: number) => {
      if (!mousePos.current) return { x: 0, y: 0 };
      const strength = repulsionStrength <= 0 ? repulsionStrength * 25 : repulsionStrength * 90;
      if (strength === 0) return { x: 0, y: 0 };

      const dx = origX - mousePos.current.x;
      const dy = origY - mousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist === 0) return { x: 0, y: 0 };

      const force = Math.pow(1 - Math.min(dist / 400, 1), 2) * strength;
      return {
        x: (dx / dist) * force,
        y: (dy / dist) * force
      };
    };

    const hoverC = parseColor(hoverColor);
    const gridC = parseColor(gridColor);
    const dotC = parseColor(dotColor);
    const trailC = parseColor(trailColor);

    const springStiffness = 0.08;
    const damping = 0.75;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // 1. Draw Mesh Lines
      pointsMap.current.forEach((point, key) => {
        const [rawX, rawY] = key.split(',');
        const ox = parseInt(rawX);
        const oy = parseInt(rawY);
        const rightKey = `${ox + gridSize},${oy}`;
        const bottomKey = `${ox},${oy + gridSize}`;
        const rightPoint = pointsMap.current.get(rightKey);
        const bottomPoint = pointsMap.current.get(bottomKey);

        const falloff = getFalloff(point.x, point.y);

        if (rightPoint) {
          const avg = (falloff + getFalloff(rightPoint.x, rightPoint.y)) / 2;
          const r = Math.round(gridC.r + (hoverC.r - gridC.r) * avg);
          const g = Math.round(gridC.g + (hoverC.g - gridC.g) * avg);
          const b = Math.round(gridC.b + (hoverC.b - gridC.b) * avg);
          const a = baseOpacity + (1 - baseOpacity) * avg * 0.9;

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(rightPoint.x, rightPoint.y);
          ctx.lineWidth = gridThickness + avg * 1.5;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
          ctx.stroke();
        }

        if (bottomPoint) {
          const avg = (falloff + getFalloff(bottomPoint.x, bottomPoint.y)) / 2;
          const r = Math.round(gridC.r + (hoverC.r - gridC.r) * avg);
          const g = Math.round(gridC.g + (hoverC.g - gridC.g) * avg);
          const b = Math.round(gridC.b + (hoverC.b - gridC.b) * avg);
          const a = baseOpacity + (1 - baseOpacity) * avg * 0.9;

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(bottomPoint.x, bottomPoint.y);
          ctx.lineWidth = gridThickness + avg * 1.5;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
          ctx.stroke();
        }
      });

      // 2. Physics Update & Draw Grid Dots
      pointsMap.current.forEach((point, key) => {
        const [rawX, rawY] = key.split(',');
        const ox = parseInt(rawX);
        const oy = parseInt(rawY);

        const rep = getRepulsion(ox, oy);
        const targetX = ox + rep.x;
        const targetY = oy + rep.y;

        const forceX = (targetX - point.x) * springStiffness;
        const forceY = (targetY - point.y) * springStiffness;

        point.vx = (point.vx + forceX) * damping;
        point.vy = (point.vy + forceY) * damping;
        point.x += point.vx;
        point.y += point.vy;

        const falloff = getFalloff(point.x, point.y);
        point.targetSize = dotSize + falloff * dotSize * 1.5;
        point.size += (point.targetSize - point.size) * 0.15;

        const r = Math.round(dotC.r + (hoverC.r - dotC.r) * falloff);
        const g = Math.round(dotC.g + (hoverC.g - dotC.g) * falloff);
        const b = Math.round(dotC.b + (hoverC.b - dotC.b) * falloff);
        const a = baseOpacity + (1 - baseOpacity) * falloff * 0.95;

        ctx.beginPath();
        ctx.arc(point.x, point.y, Math.max(dotSize * 0.6, point.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fill();
      });

      // 3. Elastic cursor trail line
      if (cursorTrail && trailPoints.current.length > 1) {
        const now = performance.now();
        const maxAge = Math.max(200, Math.round(trailLength * 50) * 40);

        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 1.8;
        ctx.beginPath();

        let started = false;
        for (let i = 0; i < trailPoints.current.length; i++) {
          const pt = trailPoints.current[i];
          if (now - pt.time < maxAge) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
        }

        const alpha = Math.max(0, 1 - (now - trailPoints.current[trailPoints.current.length - 1].time) / maxAge) * 0.85;
        ctx.strokeStyle = `rgba(${trailC.r}, ${trailC.g}, ${trailC.b}, ${alpha})`;
        ctx.stroke();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      mousePos.current = { x, y };

      if (cursorTrail) {
        trailPoints.current.push({ x, y, time: performance.now() });
        const maxLen = Math.max(1, Math.round(trailLength * 100));
        if (trailPoints.current.length > maxLen) {
          trailPoints.current.splice(0, trailPoints.current.length - maxLen);
        }
      }
    };

    const onMouseLeave = () => {
      mousePos.current = null;
    };

    const onMouseDown = () => { isMouseDown.current = true; };
    const onMouseUp = () => { isMouseDown.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(canvas);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      resizeObserver.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gridSize, repulsionStrength, radius, dotSize, gridThickness, baseOpacity, hoverColor, gridColor, dotColor, cursorTrail, trailColor, trailLength]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        ...style
      }}
    />
  );
};

