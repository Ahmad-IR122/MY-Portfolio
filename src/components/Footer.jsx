import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const obj = [
    {
      icon: Github,
      label: "GitHub",
      color: "hover:border-gray-400",
      href: "https://github.com/Ahmad-IR122",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:border-blue-500",
      href: "https://www.linkedin.com/in/ahmadikirshaid/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      color: "hover:border-sky-400",
      href: "https://x.com/A_Kakashi99",
    }
  ];
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-bold">
          <span className="text-gradient">Ahmad Irshaid</span>
        </a>
        <p className="text-[var(--body-text)] text-sm">
          © 2026 Ahmad Irshaid. Crafted with passion and precision.
        </p>
        <div className="flex gap-4">
          {obj.map(({ icon: Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              className={`text-[var(--muted-text)] hover:text-white hover:border-[var(--accent-cyan)] transition-colors`}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
