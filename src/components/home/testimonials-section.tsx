"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "motion/react";

import { homeTestimonials } from "@/content/home";
import { SectionHeading } from "@/components/shared/section-heading";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="page-shell">
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeading centered eyebrow="车主证言" title="听听他们的评价" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {homeTestimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="section-copy italic">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    fill
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    src={testimonial.imageSrc}
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-xs text-slate-500">{testimonial.car}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
