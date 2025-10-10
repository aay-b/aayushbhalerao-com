"use client";
import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiTailwindcss, SiNextdotjs, SiPython, SiC, SiGo, SiMysql, SiGnubash, SiTypescript, SiNodedotjs, SiFramer, SiPostman, SiSpring, SiSpringboot, SiSpringsecurity, SiR } from "react-icons/si";
import { FaJava, FaGit, FaGithub } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const skills = [
    { icon: FaJava, label: "Java" },
    { icon: SiPython, label: "Python" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiC, label: "C" },
    { icon: SiGo, label: "GoLang" },
    { icon: TiHtml5, label: "HTML" },
    { icon: IoLogoCss3, label: "CSS" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiGnubash, label: "Bash" },
    { icon: SiR, label: "R" },
    { icon: SiSpring, label: "Spring" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: SiSpringsecurity, label: "Spring Security" },
    { icon: SiFramer, label: "Framer Motion" },
  { icon: SiTailwindcss, label: "Tailwind" },
    { icon: SiPostman, label: "Postman" },
    { icon: FaGit, label: "Git" },
    { icon: FaGithub, label: "GitHub" },


];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="font-display text-3xl md:text-4xl mb-6">Skills & Courses</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="card flex items-center gap-3"
          >
            <s.icon className="text-2xl text-brand" />
            <span className="font-medium">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}