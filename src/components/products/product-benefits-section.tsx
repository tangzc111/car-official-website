"use client";

import { Droplets, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

import { productBenefits } from "@/content/products";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Droplets,
  ShieldCheck,
};

export function ProductBenefitsSection() {
  return (
    <section className="page-shell py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {productBenefits.map((benefit) => {
          const Icon = iconMap[benefit.icon];

          return (
            <motion.article
              key={benefit.title}
              className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-primary/50"
              whileHover={{ y: -5 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="mb-2 text-xl font-bold">{benefit.title}</h2>
                <p className="text-sm leading-relaxed text-slate-500">{benefit.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
