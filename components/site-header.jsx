"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "./brand-mark";
import { navigation } from "../lib/site-content";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <section className="topbar">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2.5 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-white/80 text-xs">
            <span className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
                  fill="currentColor"
                  opacity=".7"
                />
              </svg>
              Kathmandu-32, Koteshwor
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Values-led learning for a changing world
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-white">
            <Link href="/admissions" className="topbar-link">
              Admissions Open
            </Link>
            <Link href="/contact" className="topbar-link">
              Book A Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <div className="page-nav-shell">
        <div className="">
          <header className="site-header">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="inline-flex min-w-0" onClick={() => setIsMenuOpen(false)}>
                <BrandMark compact />
              </Link>

              <button
                type="button"
                className="mobile-menu-button inline-flex md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span className="mobile-menu-button-copy">Menu</span>
                <span className="mobile-menu-icon" aria-hidden="true">
                  <span className="mobile-menu-bar" />
                  <span className="mobile-menu-bar" />
                  <span className="mobile-menu-bar" />
                </span>
              </button>
            </div>

            <nav
              id="site-navigation"
              className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-stretch gap-2 text-sm font-medium md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-1`}
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.href === "/contact" ? "nav-cta" : "nav-pill"} w-full text-center md:w-auto`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
