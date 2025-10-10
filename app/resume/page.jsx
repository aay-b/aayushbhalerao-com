"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
            {/* Navbar (same as main site) */}
            <Navbar />

            {/* Page content */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-12 flex flex-col items-center">
                {/* Back Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.back()}
                    className="mb-8 px-4 py-2 rounded-xl bg-brand text-white font-medium hover:opacity-90 transition"
                >
                    ← Back
                </motion.button>

                {/* Animated PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-white/[0.03] backdrop-blur"
                >
                    <iframe
                        src="/my-newest-resume.pdf"
                        className="w-full h-full"
                        title="Aayush Bhalerao Resume"
                    ></iframe>
                </motion.div>

                {/* Subtle Text Below */}
                <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
                    Tip: You can download or print directly from the PDF viewer.
                </p>
            </div>
        </div>
    );
}
