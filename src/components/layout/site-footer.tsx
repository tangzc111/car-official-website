import Link from "next/link";
import { Mail, MapPin, Phone, Shield } from "lucide-react";

import { footerContact, footerGroups } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="page-shell">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="rounded bg-primary p-1.5 text-white">
                <Shield className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-black uppercase tracking-tight text-white">
                Apex<span className="text-primary">Gloss</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              作为汽车漆面保护行业的领导者，ApexGloss 致力于通过创新材料与极致施工，为车主提供卓越的产品与服务体验。
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 font-bold text-white">{group.title}</h3>
              <ul className="space-y-4 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors hover:text-primary" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-6 font-bold text-white">联系方式</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{footerContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${footerContact.phone}`}>{footerContact.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${footerContact.email}`}>{footerContact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs md:flex-row">
          <p>© 2026 ApexGloss 汽车养护用品官网. 版权所有.</p>
          <div className="flex gap-6">
            <Link className="transition-colors hover:text-primary" href="/">
              隐私政策
            </Link>
            <Link className="transition-colors hover:text-primary" href="/">
              服务条款
            </Link>
            <Link className="transition-colors hover:text-primary" href="/">
              沪ICP备12345678号
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
