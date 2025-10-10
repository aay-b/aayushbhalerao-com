export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Aayush Bhalerao. All rights reserved.</p>
        <a href="#home" className="hover:text-brand transition">Back to top ↑</a>
      </div>
    </footer>
  );
}