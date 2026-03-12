"use client";

import { useState } from "react";
import { CheckCircle2, MoveHorizontal } from "lucide-react";

import { productComparison } from "@/content/products";

export function ProductComparisonSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="page-shell py-16">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="安装前"
              className="absolute inset-0 h-full w-full object-cover"
              src={productComparison.beforeImageSrc}
            />
            <div
              className="absolute inset-0 z-10 overflow-hidden border-r-4 border-primary"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="安装后"
                className="absolute inset-0 h-full w-full max-w-none object-cover"
                src={productComparison.afterImageSrc}
                style={{ width: `${10000 / sliderPosition}%` }}
              />
            </div>
            <input
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
              max="100"
              min="1"
              onChange={(event) => setSliderPosition(Number(event.target.value))}
              type="range"
              value={sliderPosition}
            />
            <div
              className="pointer-events-none absolute top-0 bottom-0 z-20"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="h-full w-1 bg-primary" />
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg">
                <MoveHorizontal className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-30 rounded-lg bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              安装后
            </div>
            <div className="absolute bottom-4 right-4 z-30 rounded-lg bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              安装前
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">肉眼可见的保护力</h2>
          <p className="section-copy">{productComparison.description}</p>
          <ul className="space-y-4">
            {productComparison.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
