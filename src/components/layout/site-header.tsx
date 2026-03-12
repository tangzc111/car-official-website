"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { primaryNavigation } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass-card py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="page-shell flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <div className="rounded-lg bg-primary p-2 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <span className="text-xl font-black uppercase tracking-tight text-slate-900">
            Apex<span className="text-primary">Gloss</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-slate-600"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 active:scale-95 sm:inline-flex"
            href="#contact"
          >
            预约咨询
          </a>
          <button
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            className="p-2 text-slate-600 md:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            type="button"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full w-full border-b border-slate-200 bg-white p-6 shadow-xl md:hidden"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-4">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.id}
                  className="py-2 text-left font-semibold text-slate-700 hover:text-primary"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                className="mt-4 w-full rounded-xl bg-primary py-3 text-center font-bold text-white"
                href="#contact"
              >
                预约咨询
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
