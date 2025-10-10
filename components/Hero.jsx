"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="section pt-28">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >

          <h1 className="font-display text-4xl md:text-6xl leading-tight">
            Aayush Bhalerao
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Computer Science (MEng) student at the University of Bristol.
            </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
        >
          <img
              src="/my_photo.jpg"     // 👈 your image filename (see next step)
              alt="Aayush Bhalerao"
              className="object-cover w-full h-full object-[center_23%]"
          />
        </motion.div>

      </div>
    </section>
  );
}