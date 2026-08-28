import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function Modal({ isOpen, onClose, title, badge, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-noir/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden rounded-[26px] border border-gold-400/30 bg-white shadow-2xl"
          >
            {/* Top gold accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500" />

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                {badge && (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-gold-50 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold-800">
                    <Sparkles className="h-2.5 w-2.5 text-gold-600" />
                    <span>{badge}</span>
                  </div>
                )}
                <h3 className="font-aglema text-2xl font-normal text-slate-950 mt-1">
                  {title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-6 py-6 font-raleway text-slate-700 text-sm leading-relaxed space-y-4">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
