import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function SectionButton({
  icon: Icon,
  label,
  subtitle,
  badge,
  href,
  onClick,
  variant = "primary", // "featured" | "primary" | "secondary" | "tertiary"
  featured = false,
}) {
  const isFeatured = featured || variant === "featured";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";

  const Comp = onClick ? motion.button : motion.a;
  const compProps = onClick
    ? { onClick, type: "button" }
    : { href: href || "#", target: href?.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" };

  return (
    <Comp
      {...compProps}
      whileHover={{ y: -3, scale: 1.008 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[20px] p-4 sm:p-5 transition-all duration-300 ${
        isFeatured
          ? "border border-gold-400/40 bg-gradient-to-r from-noir via-[#17171c] to-noir text-white shadow-gold-glow hover:shadow-gold-glow-lg hover:border-gold-300"
          : isSecondary
          ? "border border-slate-200/90 bg-white/90 text-slate-900 shadow-sm hover:border-gold-400/40 hover:bg-white hover:shadow-premium"
          : isTertiary
          ? "border border-slate-100 bg-[#FAF8F5]/80 text-slate-800 hover:border-slate-300 hover:bg-white hover:shadow-sm"
          : "border border-slate-900/10 bg-slate-950 text-white shadow-md hover:bg-slate-900 hover:shadow-xl hover:border-gold-500/30"
      }`}
    >
      {/* Featured subtle gold ambient glow background */}
      {isFeatured && (
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold-500/15 blur-2xl transition-opacity group-hover:opacity-100" />
      )}

      <div className="flex items-center gap-3.5 sm:gap-4">
        {Icon && (
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
              isFeatured
                ? "border border-gold-400/30 bg-gold-500/15 text-gold-300 shadow-inner"
                : isSecondary
                ? "border border-slate-200/80 bg-cream/70 text-slate-800 group-hover:border-gold-400/30 group-hover:bg-gold-50 group-hover:text-gold-700"
                : isTertiary
                ? "border border-slate-200/60 bg-white text-slate-600 group-hover:text-slate-900"
                : "border border-white/10 bg-white/10 text-gold-300"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
        )}

        <div className="text-left">
          <div className="flex items-center gap-2">
            <span
              className={`text-[0.95rem] font-semibold tracking-wide sm:text-base ${
                isFeatured
                  ? "font-aglema text-lg tracking-wider text-gold-200 sm:text-xl"
                  : "text-current"
              }`}
            >
              {label}
            </span>

            {badge && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                  isFeatured
                    ? "bg-gold-400/20 text-gold-300 border border-gold-400/30"
                    : "bg-slate-900 text-gold-300"
                }`}
              >
                <Sparkles className="h-2.5 w-2.5" />
                {badge}
              </span>
            )}
          </div>

          {subtitle && (
            <p
              className={`mt-0.5 text-xs sm:text-[0.8rem] font-medium tracking-normal ${
                isFeatured
                  ? "text-slate-300/85"
                  : isSecondary || isTertiary
                  ? "text-slate-500"
                  : "text-slate-400"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center pl-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${
            isFeatured
              ? "bg-gold-500/20 text-gold-300 group-hover:bg-gold-500 group-hover:text-noir"
              : isSecondary
              ? "bg-slate-100 text-slate-500 group-hover:bg-gold-50 group-hover:text-gold-700"
              : isTertiary
              ? "bg-slate-100 text-slate-400 group-hover:text-slate-700"
              : "bg-white/10 text-white/80 group-hover:bg-white group-hover:text-slate-950"
          }`}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:scale-110" />
        </div>
      </div>
    </Comp>
  );
}
