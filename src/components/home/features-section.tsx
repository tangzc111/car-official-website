"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

import { homeFeatureCards } from "@/content/home";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="page-shell">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="我们只使用全球顶尖的保护技术，为您的爱车提供全方位的防御与美化方案。"
            title="专业养护用品"
          />
          <Link className="group flex items-center gap-2 font-bold text-primary" href="/products">
            查看全部产品
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {homeFeatureCards.map((card) => (
            <motion.article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl bg-background-light p-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  fill
                  alt={card.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={card.imageSrc}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-4 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                    {card.order}
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                <p className="section-copy">{card.description}</p>
                <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-500">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
