"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      // Replace with your EmailJS values in app/config/emailjs.js
      const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = await import("../app/config/emailjs");
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      }, PUBLIC_KEY);
      if (result.status === 200) {
        setStatus({ ok: true, msg: "Message sent! I'll get back to you soon." });
        reset();
      } else {
        setStatus({ ok: false, msg: "Something went wrong. Please try again later." });
      }
    } catch (e) {
      console.error(e);
      setStatus({ ok: false, msg: "Email service not configured. See README to set up EmailJS." });
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl mb-6">Contact me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card grid gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
              {...register("name", { required: "Your name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email"
                }
              })}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
              {...register("message", { required: "Please write a message" })}
              placeholder="Hey Aayush, I'd love to connect about..."
            />
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
          </div>
          <button
            disabled={isSubmitting}
            className="btn btn-primary"
            type="submit"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && (
              <p
                  className={`text-sm ${
                      status.ok ? "text-emerald-500" : "text-red-500"
                  }`}
              >
                {status.msg}
              </p>
          )}

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-8 text-2xl text-brand">
            <a
                href="https://www.linkedin.com/in/aayush-bhalerao-425635379/"  // 🔗 your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
                href="https://www.instagram.com/_aay.b_?igsh=MTdjYWo1bGJvenV6cA=="   // 🔗 your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>

        </form>
      </motion.div>
    </section>
  );
}