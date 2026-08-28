import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ phone = "08166508998" }) {
  // Format phone without leading zero if needed for international link
  const cleanPhone = phone.replace(/\D/g, "");
  const intlPhone = cleanPhone.startsWith("0") ? `234${cleanPhone.slice(1)}` : cleanPhone;

  return (
    <motion.a
      href={`https://wa.me/${intlPhone}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-slate-950/95 px-4 py-3 text-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_18px_40px_rgba(16,185,129,0.35)] sm:bottom-8 sm:right-8 sm:px-5 sm:py-3.5"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
      </span>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
        <MessageCircle className="h-4 w-4 fill-current text-white" />
      </div>
      <div className="text-left font-raleway">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-emerald-400">
          Concierge Live
        </p>
        <p className="text-xs font-semibold tracking-wide text-white">
          Chat on WhatsApp
        </p>
      </div>
    </motion.a>
  );
}
