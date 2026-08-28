import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function SocialIconLink({ handle, label, href = "#" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2.5, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="group inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold-400/80 hover:bg-gold-50/70 hover:text-gold-900 hover:shadow-gold-glow"
      aria-label={label || handle}
      title={label || handle}
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xs transition-transform duration-300 group-hover:scale-110">
        <Instagram className="h-3 w-3" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="font-semibold tracking-tight text-slate-900 group-hover:text-gold-950">
          {handle}
        </span>
        {label && (
          <span className="hidden sm:inline-block text-[0.65rem] font-medium text-slate-400 group-hover:text-gold-700">
            • {label}
          </span>
        )}
      </div>
    </motion.a>
  );
}
