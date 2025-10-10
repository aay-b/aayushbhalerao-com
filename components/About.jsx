"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="font-display text-3xl md:text-4xl">About Me</h2>
        <div className="card leading-relaxed text-neutral-700 dark:text-neutral-300">
          I'm a Computer Science student at the University of Bristol with a strong foundation in software engineering, AI/ML, full-stack web development, and hardware cryptography. I’ve contributed to an IEEE-published encryption project, simulated complex board game AI logic in Java, and built a secure, enterprise-grade ticket booking app.

            My passion lies in building scalable and impactful solutions that bridge the gap between theoretical computing and real-world applications. Whether it’s deploying ML models for healthcare diagnostics, implementing secure hardware protocols, or working on end-to-end SaaS platforms — I enjoy designing systems that are robust, clean, and future-ready.

            I’m currently looking for opportunities to contribute to cutting-edge teams in software engineering, AI, or research (internships/summer placements). My hobbies include playing tennis, swimming and modelling.
        </div>
      </motion.div>
    </section>
  );
}