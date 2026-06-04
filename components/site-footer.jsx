import Link from "next/link";
import { contactInfo, navigation } from "../lib/site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="section-eyebrow text-white/60">Vaidik Vidyapeeth</p>
          <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl">
            Rooted in values. Focused on confident learning.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            Vaidik Vidyapeeth welcomes families to explore a caring school environment shaped by academics,
            discipline, creativity, and clear communication.
          </p>
        </div>

        <div className="footer-panel">
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-panel">
          <div>
            <p className="footer-label">Contact</p>
            <div className="mt-4 grid gap-4">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <p className="footer-mini-label">{item.label}</p>
                  <p className="footer-copy">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
