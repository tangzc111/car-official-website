import Image from "next/image";
import { Star } from "lucide-react";

import { productReviews } from "@/content/products";

export function ProductReviewsSection() {
  return (
    <section className="page-shell py-20">
      <h2 className="mb-10 text-2xl font-bold">车主口碑评价</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productReviews.map((review) => (
          <article
            key={review.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                <Image
                  fill
                  alt={review.name}
                  className="h-full w-full object-cover"
                  src={review.imageSrc}
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-xs text-slate-500">{review.car}</p>
              </div>
              <div className="ml-auto flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 italic">&quot;{review.text}&quot;</p>
          </article>
        ))}
      </div>
    </section>
  );
}
