export function CtaSection() {
  return (
    <section className="px-6 py-20" id="contact">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-center md:p-20">
          <div className="absolute right-0 top-0 -mr-48 -mt-48 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              准备好让您的爱车
              <br />
              焕发新生了吗？
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-400">
              联系我们的专业顾问，获取为您爱车量身定制的漆面保护方案与报价。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="w-full rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95 sm:w-auto"
                href="tel:400-888-9999"
              >
                获取免费报价
              </a>
              <a
                className="w-full rounded-2xl bg-white/10 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white/20 active:scale-95 sm:w-auto"
                href="tel:400-888-9999"
              >
                拨打电话: 400-888-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
