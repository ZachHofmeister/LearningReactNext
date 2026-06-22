"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Home, LayoutGrid, Tag, Info, ArrowUpRight } from 'lucide-react';

/**
 * RESPONSIVE NAVBAR
 * - Desktop (md and up): fixed full-width bar pinned to the TOP of the screen.
 * - Mobile (below md): a slim brand strip on top + a collapsed tab bar
 *   pinned to the BOTTOM of the screen (the common native-app pattern),
 *   with the call-to-action as a raised pill button inside the tab bar.
 *
 * TO CUSTOMIZE:
 * - Edit NAV_ITEMS below (label, anchor id, icon).
 * - Edit the brand name "Lumen" and CTA label "Get Started".
 * - Replace handleCta() with your real action (open modal, navigate, etc).
 * - Swap the color classes (indigo-600 / emerald-600) for your brand colors.
 */

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'features', label: 'Features', icon: LayoutGrid },
  { id: 'pricing', label: 'Pricing', icon: Tag },
  { id: 'about', label: 'About', icon: Info },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = useCallback(
    (id) => (e) => {
      e.preventDefault();
      setActive(id);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    []
  );

  const handleCta = () => {
    // Hook up your real CTA action here
    console.log('CTA clicked');
  };

  return (
    <>
      {/* ---------- DESKTOP TOP NAVBAR ---------- */}
      <nav
        className={`hidden md:flex fixed top-0 inset-x-0 z-50 items-center justify-between px-8 transition-all duration-300 ${
          scrolled
            ? 'h-16 bg-white shadow-sm border-b border-slate-200'
            : 'h-20 bg-transparent border-b border-transparent'
        }`}
      >
        <a href="#home" onClick={goTo('home')} className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 group-hover:scale-125 transition-transform" />
          <span className="text-lg font-bold tracking-tight text-slate-900">Lumen</span>
        </a>

        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={goTo(id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === id ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-indigo-600" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCta}
          className="group inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </nav>

      {/* ---------- MOBILE TOP STRIP (brand only) ---------- */}
      <div
        className={`md:hidden fixed top-0 inset-x-0 z-50 flex items-center px-5 h-14 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-slate-200'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <a href="#home" onClick={goTo('home')} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          <span className="text-base font-bold tracking-tight text-slate-900">Lumen</span>
        </a>
      </div>

      {/* ---------- MOBILE BOTTOM TAB BAR ---------- */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 flex items-stretch"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={goTo(id)}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5"
          >
            <Icon
              className={`w-5 h-5 ${active === id ? 'text-indigo-600' : 'text-slate-400'}`}
              strokeWidth={active === id ? 2.4 : 2}
            />
            <span className={`text-xs font-medium ${active === id ? 'text-indigo-600' : 'text-slate-400'}`}>
              {label}
            </span>
            {active === id && <span className="w-1 h-1 rounded-full bg-indigo-600" />}
          </a>
        ))}

        <button onClick={handleCta} className="flex-1 flex flex-col items-center justify-center">
          <span className="-mt-6 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </span>
          <span className="text-xs font-semibold text-emerald-600 mt-0.5">Start</span>
        </button>
      </nav>
    </>
  );
}

/* ---------- Demo page so you can see the navbar in context ---------- */
function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center px-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="pt-14 md:pt-20 pb-24 md:pb-0">
        <Section id="home" title="Home">
          This is placeholder content so you can scroll and see the navbar behave: it stays
          pinned to the top on desktop, and collapses into a tab bar at the bottom on mobile.
          Resize your window or open this on a phone to see both states.
        </Section>
        <Section id="features" title="Features">
          Swap this section, and the others, for your real page content. The nav items, icons,
          and the call-to-action button are all defined at the top of Navbar.jsx.
        </Section>
        <Section id="pricing" title="Pricing">
          Tapping a tab on mobile, or a link on desktop, smooth-scrolls to its matching
          section and highlights the active item with the accent dot.
        </Section>
        <Section id="about" title="About">
          The "Get Started" button is styled as a raised pill in the mobile tab bar so it stays
          the most prominent action even when space is tight.
        </Section>
      </main>
    </div>
  );
}
