"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

type FlightState = {
  x: number;
  y: number;
  rotate: number;
  duration: number;
};

type AnimatedPlanesBackgroundProps = {
  count?: number;
  src?: string;
  className?: string;
};

type PlaneProps = {
  getBounds: () => { width: number; height: number };
  src: string;
  index: number;
};

function randomPoint(width: number, height: number) {
  const padding = 72;
  const usableWidth = Math.max(width - padding * 2, 1);
  const usableHeight = Math.max(height - padding * 2, 1);

  return {
    x: padding + Math.random() * usableWidth,
    y: padding + Math.random() * usableHeight,
  };
}

function rotationFrom(from: { x: number; y: number }, to: { x: number; y: number }) {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
}

function randomDuration() {
  return 8 + Math.random() * 7;
}

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453123;

  return value - Math.floor(value);
}

function Plane({ getBounds, src, index }: PlaneProps) {
  const [isReady, setIsReady] = useState(false);
  const [flight, setFlight] = useState<FlightState>({ x: 0, y: 0, rotate: 0, duration: 0 });

  const style = useMemo(() => {
    const size = 54 + Math.round(seededValue(index, 1) * 38);
    const opacity = 0.5 + seededValue(index, 2) * 0.2;

    return { size, opacity };
  }, [index]);

  const flyToNext = useCallback(() => {
    setFlight((current) => {
      const { width, height } = getBounds();
      const next = randomPoint(width, height);

      return {
        x: next.x,
        y: next.y,
        rotate: rotationFrom({ x: current.x, y: current.y }, next),
        duration: randomDuration(),
      };
    });
  }, [getBounds]);

  useEffect(() => {
    let secondFrameId: number | null = null;

    const firstFrameId = requestAnimationFrame(() => {
      const { width, height } = getBounds();
      const start = randomPoint(width, height);
      const next = randomPoint(width, height);

      setFlight({
        x: start.x,
        y: start.y,
        rotate: rotationFrom(start, next),
        duration: 0,
      });
      setIsReady(true);

      secondFrameId = requestAnimationFrame(() => {
        setFlight({
          x: next.x,
          y: next.y,
          rotate: rotationFrom(start, next),
          duration: randomDuration(),
        });
      });
    });

    return () => {
      cancelAnimationFrame(firstFrameId);
      if (secondFrameId !== null) {
        cancelAnimationFrame(secondFrameId);
      }
    };
  }, [getBounds]);

  if (!isReady) {
    return null;
  }

  return (
    <motion.div
      className="absolute top-0 left-0"
      initial={false}
      animate={{ x: flight.x, y: flight.y, rotate: flight.rotate }}
      transition={{ duration: flight.duration, ease: "linear" }}
      onAnimationComplete={flyToNext}
    >
      <Image
        src={src}
        alt=""
        width={style.size}
        height={style.size}
        className="select-none"
        style={{ opacity: style.opacity }}
        aria-hidden
        priority={false}
      />
    </motion.div>
  );
}

export function AnimatedPlanesBackground({
  count = 1,
  src = "/paper_plane.png",
  className = "",
}: AnimatedPlanesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const safeCount = Math.max(0, Math.min(20, Math.floor(count)));

  const getBounds = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();

    return {
      width: rect?.width ?? window.innerWidth,
      height: rect?.height ?? window.innerHeight,
    };
  }, []);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: safeCount }).map((_, index) => (
        <Plane key={`plane-${index}`} index={index} getBounds={getBounds} src={src} />
      ))}
    </div>
  );
}
