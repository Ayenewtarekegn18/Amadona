"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/catalog", label: "Catalog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-30 bg-surface backdrop-blur border-b border-subtle transition-colors">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4 gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-serif font-bold text-app">
                            Amadoniyas
                        </span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <nav className="hidden md:block">
                            <ul className="flex items-center space-x-6 text-sm font-medium">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-muted hover:text-accent transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex items-center gap-2 rounded-full border border-subtle bg-card p-3 text-sm font-semibold text-app shadow-elevated transition-colors hover:text-accent"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <MoonStar className="h-4 w-4" />
                            )}
                        </button>

                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center rounded-full border border-subtle bg-card p-3 text-app shadow-elevated transition-colors hover:text-accent"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="rounded-2xl border border-subtle bg-card shadow-elevated">
                            <ul className="flex flex-col">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-3 text-sm font-semibold text-app hover:text-accent transition-colors border-b border-subtle last:border-b-0"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
