"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Home", href: "#", sub: "Start here" },
  { label: "Work", href: "#", sub: "Selected projects" },
  { label: "Studio", href: "#", sub: "How we operate" },
  { label: "Journal", href: "#", sub: "Thoughts & process" },
  { label: "Contact", href: "#", sub: "Let's talk" },
];

const SOCIALS = ["Twitter", "Dribbble", "GitHub", "LinkedIn"];

export default function SlideNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0e0d] text-[#f0ece4] font-serif">
      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');

        .font-display { font-family: 'DM Serif Display', serif; }
        .font-mono-dm { font-family: 'DM Mono', monospace; }

        .nav-link-row:hover .nav-label { color: #c9b99a; }
        .nav-link-row:hover .nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-6 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl tracking-tight text-[#f0ece4] pointer-events-auto"
        >
          Studio
        </motion.span>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="pointer-events-auto flex flex-col gap-1.5 p-2 z-[200] text-[#f0ece4] cursor-pointer bg-transparent border-0"
        >
          <span
            className="block w-6 bg-current transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              height: "1.5px",
              transform: open ? "translateY(7.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 bg-current transition-opacity duration-200"
            style={{ height: "1.5px", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 bg-current transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              height: "1.5px",
              transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none",
            }}
          />
        </motion.button>
      </header>

      {/* Hero placeholder */}
      <main className="flex flex-col items-center justify-center h-screen gap-3 select-none">
        <p className="font-mono-dm text-[11px] tracking-[0.12em] uppercase text-[#f0ece4]/35">
          Click the menu →
        </p>
        <h1 className="font-display text-[clamp(48px,10vw,96px)] tracking-tight leading-none text-[#f0ece4]">
          Slide Nav
        </h1>
      </main>

      {/* === OVERLAY + PANEL === */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-[#050403]/75 backdrop-blur-md"
            />

            {/* Slide-in panel */}
            <motion.nav
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
              className="fixed top-0 right-0 bottom-0 z-120 w-[min(560px,90vw)] bg-[#181614] border-l border-[#f0ece4]/[0.07] flex flex-col pt-24 pb-12 px-12 overflow-y-auto"
            >
              {/* Links */}
              <ul className="list-none flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.07,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="nav-link-row group flex items-baseline gap-4 border-t border-[#f0ece4]/10 last:border-b last:border-[#f0ece4]/10 py-7 no-underline cursor-pointer"
                    >
                      <span className="font-mono-dm text-[11px] tracking-[0.08em] text-[#f0ece4]/30 min-w-[28px] mt-1">
                        0{i + 1}
                      </span>
                      <span className="nav-label font-display text-[clamp(38px,7vw,64px)] leading-none text-[#f0ece4] tracking-tight transition-colors duration-200">
                        {link.label}
                      </span>
                      <em
                        className="nav-arrow not-italic text-[28px] text-[#c9b99a] leading-none opacity-0 -translate-x-1.5 transition-all duration-200 ml-2"
                      >
                        ↗
                      </em>
                      <span className="font-mono-dm text-[11px] tracking-[0.06em] uppercase text-[#f0ece4]/35 ml-auto self-center">
                        {link.sub}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Footer socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52, duration: 0.4 }}
                className="flex flex-wrap gap-6 pt-10"
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-mono-dm text-[11px] tracking-[0.08em] uppercase text-[#f0ece4]/35 no-underline transition-colors duration-200 hover:text-[#f0ece4]"
                  >
                    {s}
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}