"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const data = [
  {
    title: "Human Fall Detection",
    desc: "A deep learning–powered system that detects human falls in real-time video streams using skeleton-based pose estimation and LSTM sequence modeling.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Pickle"],
    github: "https://github.com/aay-b/human-fall-detection",
    demo: "#"
  },
  {
    title: "Chronic-Kidney-Disease-Detection",
    desc: "Early Prediction for Chronic Kidney Disease Detection: A Progressive Approach to Health Management",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Pickle"],
    github: "https://github.com/yourusername/dev-recipes",
    demo: "#"
  },
  {
    title: "Book-My-Show Clone",
    desc: "Developed a full-stack movie ticket booking platform. Implemented secure JWT authentication, admin/user dashboards, booking workflows, email verification, and an AI chatbot assistant. Designed REST APIs, optimized database queries, and built a responsive SPA UI. The code link will redirect to the backend project. The frontend can be found on my GitHub.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "MySQL", "Hibernate", "JWT", "React", "Vite", "Lombok", "Jakarta Validation", "Postman"],
    github: "https://github.com/aay-b/Book_My-Show_Backend",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex items-end justify-between mb-6">
        <h2 className="font-display text-3xl md:text-4xl">Projects</h2>
        <a href="https://github.com/aay-b" className="text-sm hover:text-brand transition">View GitHub →</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="card flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={p.github} className="btn btn-outline text-sm"><FiGithub className="mr-2"/> Code</a>
              <a href={p.demo} className="btn btn-primary text-sm"><FiExternalLink className="mr-2"/> Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}