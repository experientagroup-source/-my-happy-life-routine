"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-1.5 p-2 -mr-2"
      >
        <span className="block w-6 h-px bg-mhr-ink" />
        <span className="block w-6 h-px bg-mhr-ink" />
        <span className="block w-4 h-px bg-mhr-ink self-end" />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 bg-mhr-ivory border-b border-mhr-line px-5 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em] text-mhr-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
