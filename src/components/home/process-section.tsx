"use client";

import {
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { homeProcessSteps } from "@/content/home";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Sparkles,
  Wrench,
  ShieldCheck,
};

export function ProcessSection() {
  return (
    <section className="bg-background-light py-24">
      <div className="page-shell">
        <SectionHeading
          centered
          description="每一台车都是一件艺术品，我们秉持匠心精神，遵循严格的施工标准。"
          title="施工流程"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeProcessSteps.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <motion.article
                key={step.title}
                className="relative space-y-4 rounded-3xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
