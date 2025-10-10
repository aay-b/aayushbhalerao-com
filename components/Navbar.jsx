"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "backdrop-blur bg-white/70 dark:bg-black/40 border-b border-neutral-200 dark:border-neutral-800" : ""}`}>
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-display text-xl grad-text">
          <img
              src="/my-logo.png"  // 👈 change to your logo filename if different
              alt="Aayush logo"
              className="w-auto h-16 object-contain mt-6 transition-transform duration-300 hover:scale-105"
          />

        </Link>

        <div className="hidden md:flex items-center gap-6">
          {items.map(i => (
              i.label === "Resume" ? (
                  <a
                      key={i.href}
                      href="/resume"
                      className="hover:text-brand transition"
                  >
                    {i.label}
                  </a>
              ) : (
                  <a
                      key={i.href}
                      href={i.href}
                      className="hover:text-brand transition"
                  >
                    {i.label}
                  </a>
              )
          ))}

          <ThemeToggle />
        </div>
        <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)} aria-label="Open menu">
          {open ? <HiX/> : <HiOutlineMenu/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {items.map(i => (
              <a key={i.href} href={i.href} onClick={()=>setOpen(false)} className="py-2">
                {i.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}