import Link from "next/link";
import { MapPin, Shield, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";

export function ProductStoreCtaSection() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight">准备好为您的爱车升级了吗？</h2>
        <p className="text-lg text-slate-400">
          点击下方按钮，查询您附近的授权施工店，并领取专属优惠券。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-white transition-all hover:bg-primary/90 active:scale-95"
            href="tel:400-888-9999"
          >
            <MapPin className="h-6 w-6" />
            查询附近授权店
          </a>
          <Link
            className="rounded-2xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white/20 active:scale-95"
            href="/"
          >
            了解更多系列
          </Link>
        </div>
        <div className="mt-12 flex items-center gap-8 opacity-50 grayscale">
          <ShieldCheck className="h-10 w-10" />
          <ShieldAlert className="h-10 w-10" />
          <Shield className="h-10 w-10" />
          <Sparkles className="h-10 w-10" />
        </div>
      </div>
    </section>
  );
}
