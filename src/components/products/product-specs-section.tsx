"use client";

import { motion } from "motion/react";

import { productSpecs } from "@/content/products";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProductSpecsSection() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      <div className="page-shell">
        <div className="mb-16">
          <SectionHeading centered title="技术规格参数" />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {productSpecs.map((spec, index) => (
            <motion.article
              key={spec.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-500">
                {spec.label}
              </p>
              <p className="text-4xl font-black text-primary">{spec.value}</p>
              <p className="mt-2 text-xs text-slate-400">{spec.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
