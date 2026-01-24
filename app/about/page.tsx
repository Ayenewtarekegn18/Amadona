"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, Leaf, Diamond, Award } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function AboutUs() {
    return (
        <div className="bg-app text-app">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-white">
                <Image
                    src="/about.jpg"
                    alt="Gemstone mine"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 hero-overlay" />
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
                        {...fadeIn}
                    >
                        About Amadoniyas Gem and Mineral World
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl mb-8"
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        Showcasing Ethiopia&apos;s and Africa&apos;s Gemstones,
                        Minerals, and Energy Resources
                    </motion.p>
                    <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                        <Link
                            href="/catalog"
                            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
                        >
                            Explore Our Collection
                            <ArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-8">
                            Amadoniyas Gem and Mineral World
                        </h2>
                        <p className="text-lg text-app mb-4 text-center">
                            <strong>Founder & CEO:</strong> Eyosafit
                        </p>
                        <p className="text-lg text-muted mb-8">
                            We showcase Ethiopia and Africa&apos;s standout gemstones, minerals, and energy resources—pairing ethical sourcing with global reach. Our mission: connect local wealth to world markets while lifting communities through fair, sustainable partnerships.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Emergence Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                            Our Emergence
                        </h2>
                        <p className="text-lg text-muted mb-6">
                            Ethiopia&apos;s opals, emeralds, sapphires, gold, and energy minerals revealed how under-told Africa&apos;s resource story is. We started Amadoniyas to move these treasures from overlooked to celebrated—responsibly.
                        </p>
                        <p className="text-lg text-muted">
                            Our focus: spotlight world-class quality, traceable sourcing, and community benefit so every stone and mineral creates value where it is found.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mineral Portfolio Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Ethiopia&apos;s Mineral Portfolio
                        </h2>
                        <p className="text-lg text-muted mb-8">
                            Ethiopia blends top-tier gemstones with strategic industrial and energy minerals:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-muted">
                            <div className="space-y-4">
                                <p><strong>Metallics:</strong> High-grade gold (Lega Dembi, Tulu Kapi) plus copper and iron ore.</p>
                                <p><strong>Industrial:</strong> Limestone, gypsum, potash, marble; Danakil potash is among the largest globally.</p>
                                <p><strong>Gemstones:</strong> Welo opals, emeralds, sapphires, tourmalines—recognized for clarity and color.</p>
                                <p><strong>Energy:</strong> Coal alongside emerging oil and gas prospects.</p>
                            </div>
                            <div className="space-y-4">
                                <p><strong>Construction:</strong> Sand, gravel, clay, basalt, granite for infrastructure and export stone.</p>
                                <p><strong>Fertilizer:</strong> Potash and phosphate reserves in Danakil.</p>
                                <p><strong>Battery/tech:</strong> Tantalum, niobium, lithium in early-stage development.</p>
                                <p className="italic">Overall: high quality, scalable, and still underdeveloped.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Globe className="w-16 h-16 text-gray-700 mb-6" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Our Vision
                        </h2>
                        <p className="text-lg text-muted">
                            We want Africa&apos;s resources celebrated for both beauty and impact—fueling livelihoods, innovation, and pride. Every deal should move communities and buyers forward together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Goal Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Our Goal
                        </h2>
                        <p className="text-lg text-muted mb-6">
                            Build a trusted home for ethical, high-quality African resources by:
                        </p>
                        <ul className="space-y-3 text-lg text-muted list-disc list-inside">
                            <li><strong>Promoting richness:</strong> Showcase Africa&apos;s mineral and gemstone diversity globally.</li>
                            <li><strong>Empowering communities:</strong> Fair trade, local jobs, and skills growth.</li>
                            <li><strong>Sustaining environments:</strong> Responsible extraction that protects land and water.</li>
                            <li><strong>Connecting markets:</strong> Transparent supply chains from source to buyer.</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Us?
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Authenticity",
                                description:
                                    "Direct-from-Africa sourcing with traceability at every step.",
                                icon: Diamond,
                            },
                            {
                                title: "Quality",
                                description:
                                    "Expert-picked, certified stones and minerals.",
                                icon: Award,
                            },
                            {
                                title: "Ethics",
                                description:
                                    "Fair trade partnerships and responsible extraction.",
                                icon: Leaf,
                            },
                            {
                                title: "Hope",
                                description:
                                    "Every sale aims to leave communities better off.",
                                icon: Users,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <item.icon className="w-16 h-16 mx-auto mb-4 text-gray-700" />
                                <h3 className="text-xl font-bold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Energy Minerals Section */}
            <section className="py-20 bg-surface-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Energy Minerals: Powering Africa&apos;s Future
                        </h2>
                        <p className="text-lg text-muted">
                            Africa&apos;s energy minerals, including coal, oil,
                            natural gas, and rare earth elements, hold the key
                            to the continent&apos;s sustainable development.
                            Ethiopia&apos;s Danakil Depression, for instance, is
                            home to vast potash reserves and geothermal energy
                            potential, while other regions offer untapped oil
                            and gas resources. At Amadoniyas Gem and Mineral
                            World, we are committed to promoting these energy
                            resources responsibly, ensuring they contribute to
                            Africa&apos;s energy security and economic growth
                            while minimizing environmental impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto bg-accent-foreground p-8 md:p-12 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            A Message from the Founder
                        </h2>
                        <blockquote className="text-lg text-muted italic mb-4">
                            &quot;From Welo opals to Danakil potash, Africa&apos;s resources deserve to be valued at home and abroad. Every deal should leave our communities stronger.&quot;
                        </blockquote>
                        <blockquote className="text-lg text-muted italic mb-6">
                            &quot;Amadoniyas is our way to share that value with the world—responsibly, transparently, and with pride.&quot;
                        </blockquote>
                        <p className="text-lg font-bold text-app">
                            – Eyosafit, Founder & CEO
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="relative py-20 text-white">
                <Image
                    src="/contact.jpg"
                    alt="Gemstones"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 hero-overlay" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4"
                        {...fadeIn}
                    >
                        Join Us on This Journey
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        Explore our collection, learn about Africa&apos;s
                        geological and energy wonders, and become part of a
                        movement that celebrates beauty, sustainability, and
                        hope. Amadoniyas Gem and Mineral World is more than a
                        business—it&apos;s a vision for a brighter Africa and a
                        connected world.
                    </motion.p>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                        {...fadeIn}
                        transition={{ delay: 0.3 }}
                    >
                        Welcome to the world of Amadoniyas, where every stone
                        tells a story, every resource powers progress, and every
                        purchase makes a difference.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        {...fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/catalog"
                            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                        >
                            Explore Our Collection
                            <ArrowRight className="ml-2" />
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                        >
                            Contact Us
                            <ArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
