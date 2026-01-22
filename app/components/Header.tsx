"use client";

import Link from "next/link";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-30 bg-surface backdrop-blur border-b border-subtle transition-colors">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4 gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-serif font-bold text-app">
                            Amadoniyas
                        </span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <nav>
                            <ul className="flex space-x-6 text-sm font-medium">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-muted hover:text-accent transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/catalog"
                                        className="text-muted hover:text-accent transition-colors"
                                    >
                                        Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-muted hover:text-accent transition-colors"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-muted hover:text-accent transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="flex items-center gap-2 rounded-full border border-subtle bg-card p-4 text-sm font-semibold text-app shadow-elevated transition-colors hover:text-accent"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <MoonStar className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
