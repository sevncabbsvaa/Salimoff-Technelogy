"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamPhoto({ src, alt, size }: { src: string; alt: string; size: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          background: "repeating-linear-gradient(45deg, #16233D, #16233D 8px, #1A2947 8px, #1A2947 16px)",
        }}
        className="rounded-full border-[1.5px] border-accent-light/25 flex items-center justify-center font-mono text-[10px] text-muted"
      >
        foto
      </div>
    );
  }

  return (
    <div style={{ width: size, height: size }} className="relative rounded-full overflow-hidden border-[1.5px] border-accent-light/25">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
