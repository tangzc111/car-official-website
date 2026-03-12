import Image from "next/image";

import { productHero } from "@/content/products";

export function ProductHeroSection() {
  return (
    <section className="page-shell py-8">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-transparent" />
        <Image
          fill
          alt={productHero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          src={productHero.imageSrc}
          sizes="100vw"
        />
        <div className="relative z-20 flex h-full flex-col justify-center gap-4 px-12">
          <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {productHero.badge}
          </span>
          <h1 className="text-5xl font-black leading-tight tracking-tighter text-white md:text-7xl">
            {productHero.titleTop}
            <br />
            <span className="text-primary">{productHero.titleAccent}</span>
          </h1>
          <p className="max-w-xl text-lg font-light text-slate-200 md:text-xl">
            {productHero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
