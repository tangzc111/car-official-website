"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { homeHero } from "@/content/home";


export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background-light via-background-light/80 to-transparent" />
        <Image
          fill
          alt={homeHero.imageAlt}
          className="h-full w-full object-cover"
          src={homeHero.imageSrc}
          sizes="100vw"
        />
      </div>

      <div className="page-shell relative z-20 py-20">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          className="max-w-2xl space-y-8"
          initial={{ x: -50, opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <ShieldCheck className="h-4 w-4" />
            {homeHero.badge}
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
            {homeHero.titleTop}
            <br />
            <span className="text-primary">{homeHero.titleAccent}</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl">
            {homeHero.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95"
              href="/products"
            >
              立即探索
            </Link>
            <a
              className="glass-card rounded-xl px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-white/90 active:scale-95"
              href="#contact"
            >
              获取免费报价
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
