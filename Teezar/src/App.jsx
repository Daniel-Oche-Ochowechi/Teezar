import { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  MessageCircle,
  Sparkles,
  Calendar,
  FileDown,
  ShoppingBag,
  Gem,
  GraduationCap,
  Info,
  ShieldCheck,
  Crown,
  ChevronRight,
  CheckCircle2,
  Clock,
  Scissors,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import SectionButton from "./components/SectionButton.jsx";
import SocialIconLink from "./components/SocialIconLink.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Modal from "./components/Modal.jsx";
import BookingModal from "./components/BookingModal.jsx";
import MeasurementModal from "./components/MeasurementModal.jsx";
import PriceGuideModal from "./components/PriceGuideModal.jsx";
import LookbookModal from "./components/LookbookModal.jsx";
import profilePlaceholder from "./assets/profile-placeholder.svg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const instagramChannels = [
  {
    handle: "@official_teezar",
    label: "Official",
    href: "https://www.instagram.com/official_teezar/",
  },
  {
    handle: "@teezar_fashion",
    label: "Couture Atelier",
    href: "https://www.instagram.com/teezar_fashion/",
  },
  {
    handle: "@teezar_jewelry",
    label: "Fine Jewelry",
    href: "https://www.instagram.com/teezar_jewelry/",
  },
  {
    handle: "@by_teezar",
    label: "Ready-to-Wear",
    href: "https://www.instagram.com/by_teezar/",
  },
];

const occasions = [
  "Bridal & White Wedding",
  "Asoebi & Pepper Wedding Guest",
  "Traditional (George, Aso Oke, Saqi)",
  "Nikkah & Reception",
  "Engagement & Civil Court",
  "Pre-Wedding & After Party",
  "Prom & Luxury Birthdays",
  "Henna Party & Budan Kai",
];

const consultationPhone = "08166508998";
const intlConsultationPhone = "2348166508998";

function App() {
  const [activeModal, setActiveModal] = useState(null); 
  // 'booking' | 'measurements' | 'price-guide' | 'policy' | 'about' | 'collections' | 'jewelry'
  const [copiedPhone, setCopiedPhone] = useState(false);

  const closeModal = () => setActiveModal(null);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(consultationPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF8F5] text-slate-900 font-raleway antialiased selection:bg-gold-200 selection:text-noir">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[650px] rounded-full bg-gradient-to-b from-gold-200/35 via-gold-100/20 to-transparent blur-3xl" />
        <div className="absolute top-[35%] -right-40 h-[400px] w-[400px] rounded-full bg-gold-200/20 blur-3xl" />
        <div className="absolute top-[65%] -left-40 h-[420px] w-[420px] rounded-full bg-gold-300/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5 sm:space-y-6"
        >
          {/* Atelier Brand Profile Header */}
          <motion.header
            variants={itemVariants}
            className="relative overflow-hidden rounded-[28px] border border-white/90 bg-white/85 p-6 sm:p-8 shadow-premium backdrop-blur-xl"
          >
            {/* Subtle top gold accent line */}
            <div className="absolute inset-x-0 top-0 h-[3.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

            <div className="flex flex-col items-center text-center">
              {/* Brand Avatar with Glowing Gold Frame */}
              <div className="relative mb-5">
                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500 opacity-65 blur-md transition-opacity animate-pulse" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold-300/80 bg-noir p-1 shadow-gold-glow">
                  <img
                    src={profilePlaceholder}
                    alt="Teezar Fashion Atelier"
                    className="h-full w-full rounded-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {/* Verified Couture Badge */}
                <div
                  className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-tr from-noir to-charcoal text-gold-300 shadow-md"
                  title="Verified Haute Couture Atelier"
                >
                  <Crown className="h-4 w-4" />
                </div>
              </div>

              {/* Atelier Brand Title & Badges */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-50/80 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-gold-800">
                <Sparkles className="h-3 w-3 text-gold-600" />
                <span>Haute Couture Atelier</span>
              </div>

              <h1 className="mt-3 font-aglema text-4xl sm:text-5xl font-normal tracking-tight text-slate-950">
                Teezar Fashion
              </h1>

              <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-700">
                Luxury Bespoke • Bridal • Ready-to-Wear
              </p>

              {/* Atelier Location & Quick Phone Copy */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-gold-600" />
                  Lagos, Nigeria • Worldwide Shipping
                </span>
                <span className="text-slate-300">•</span>
                <button
                  onClick={handleCopyPhone}
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.7rem] font-semibold text-slate-700 transition-colors hover:border-gold-300 hover:bg-gold-50 hover:text-gold-900"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-400" />
                      <span>{consultationPhone}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Brand Philosophy / Occasions Grid */}
              <div className="mt-5 w-full border-t border-slate-100 pt-5">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Specialized In Bespoke Occasion Wear
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                  {occasions.map((occasion) => (
                    <span
                      key={occasion}
                      className="rounded-full border border-slate-200/80 bg-[#FAF8F5] px-3 py-1 text-[0.75rem] font-medium text-slate-700 transition-colors hover:border-gold-300 hover:bg-gold-50 hover:text-gold-900"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instagram Channels */}
              <div className="mt-6 w-full border-t border-slate-100/80 pt-4">
                <p className="mb-2.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-800">
                  Follow Our Instagram Channels
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  {instagramChannels.map((item) => (
                    <SocialIconLink
                      key={item.handle}
                      handle={item.handle}
                      label={item.label}
                      href={item.href}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.header>

          {/* Section 1: Signature Couture & Consultations */}
          <motion.section
            variants={itemVariants}
            className="rounded-[28px] border border-white/80 bg-white/90 p-5 sm:p-6 shadow-premium backdrop-blur-xl space-y-3.5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="font-aglema text-2xl font-normal text-slate-950">
                  Signature & Bookings
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Exclusive bridal packages & private styling sessions
                </p>
              </div>
              <span className="rounded-full border border-gold-300/40 bg-gold-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-700">
                VIP Services
              </span>
            </div>

            <SectionButton
              icon={Crown}
              label="3M Bridal Package"
              subtitle="The Ultimate Couture Bridal Ensemble & Styling Experience"
              badge="Signature"
              featured
              href={`https://wa.me/${intlConsultationPhone}?text=Hello%20Teezar%20Fashion,%20I%20would%20like%20to%20inquire%20about%20the%203M%20Bridal%20Package.`}
            />

            <SectionButton
              icon={Calendar}
              label="Book Atelier Consultation"
              subtitle="Select Date, Time & Mode (Physical Studio or Virtual)"
              variant="primary"
              onClick={() => setActiveModal("booking")}
            />

            <SectionButton
              icon={Scissors}
              label="Submit Bespoke Measurements"
              subtitle="Submit Your Body Measurements for Custom Couture & Fittings"
              badge="Fit Guide"
              variant="secondary"
              onClick={() => setActiveModal("measurements")}
            />

            <SectionButton
              icon={FileDown}
              label="View & Download Price Guide"
              subtitle="Multi-Currency Lookbook & Bespoke Pricing Architecture"
              variant="secondary"
              onClick={() => setActiveModal("price-guide")}
            />
          </motion.section>

          {/* Section 2: Ready-to-Wear, Fine Jewelry & Academy */}
          <motion.section
            variants={itemVariants}
            className="rounded-[28px] border border-white/80 bg-white/90 p-5 sm:p-6 shadow-premium backdrop-blur-xl space-y-3.5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="font-aglema text-2xl font-normal text-slate-950">
                  Atelier Collections
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Curated fashion, statement accents & design academy
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-[#FAF8F5] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-600">
                Discover
              </span>
            </div>

            <SectionButton
              icon={ShoppingBag}
              label="Ready-to-Wear Collection"
              subtitle="Instant Elegance • Handcrafted Limited Edition Pieces"
              variant="secondary"
              onClick={() => setActiveModal("collections")}
            />

            <SectionButton
              icon={Gem}
              label="Fine Jewelry & Accessories"
              subtitle="Statement Headpieces, Royal Crowns & Bridal Sets"
              variant="secondary"
              onClick={() => setActiveModal("jewelry")}
            />

            <SectionButton
              icon={GraduationCap}
              label="Teezar Fashion Academy"
              subtitle="Professional Pattern Drafting & Haute Couture Masterclasses"
              badge="Now Enrolling"
              variant="primary"
              href={`https://wa.me/${intlConsultationPhone}?text=Hello%20Teezar%20Fashion,%20I%20would%20like%20to%20learn%20more%20about%20enrolling%20in%20the%20Fashion%20Academy.`}
            />
          </motion.section>

          {/* Section 3: Brand & Client Policies */}
          <motion.section
            variants={itemVariants}
            className="rounded-[28px] border border-white/80 bg-white/90 p-5 sm:p-6 shadow-premium backdrop-blur-xl space-y-3"
          >
            <div className="mb-2">
              <h2 className="font-aglema text-2xl font-normal text-slate-950">
                About & Policies
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Client experience guidelines, production timelines & heritage
              </p>
            </div>

            <SectionButton
              icon={Info}
              label="About Teezar Fashion"
              subtitle="Our Craftsmanship, Heritage & Couturier Story"
              variant="tertiary"
              onClick={() => setActiveModal("about")}
            />

            <SectionButton
              icon={ShieldCheck}
              label="Consultation & Fitting Policy"
              subtitle="Production Timelines, Booking Deposits & Alteration Terms"
              variant="tertiary"
              onClick={() => setActiveModal("policy")}
            />
          </motion.section>

          {/* Section 4: VIP Direct WhatsApp Concierge Card */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-[28px] border border-gold-400/30 bg-gradient-to-br from-noir via-[#17171d] to-noir p-6 text-white shadow-card-hover"
          >
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-gold-400/10 blur-2xl" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available For Inquiries</span>
                </div>
                <h3 className="mt-3 font-aglema text-2xl sm:text-3xl text-gold-200">
                  Direct Atelier Concierge
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Speak directly with our bridal stylist & lead designer
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${intlConsultationPhone}`}
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-4 font-bold text-noir shadow-gold-glow transition-all duration-300 hover:brightness-110"
              >
                <span className="flex items-center gap-3 text-sm sm:text-base">
                  <MessageCircle className="h-5 w-5 fill-current" />
                  Chat on WhatsApp ({consultationPhone})
                </span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            variants={itemVariants}
            className="pt-4 pb-12 text-center text-xs text-slate-400 space-y-2"
          >
            <p className="font-medium tracking-wide">
              © {new Date().getFullYear()} Teezar Fashion. All Rights Reserved.
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold-700">
              Haute Couture • Luxury Bespoke • Bridal Atelier
            </p>
          </motion.footer>
        </motion.div>
      </main>

      {/* Modals */}
      {/* 1. Interactive Booking Modal */}
      <BookingModal
        isOpen={activeModal === "booking"}
        onClose={closeModal}
        phone={intlConsultationPhone}
      />

      {/* 2. Interactive Measurement Submission Modal */}
      <MeasurementModal
        isOpen={activeModal === "measurements"}
        onClose={closeModal}
        phone={intlConsultationPhone}
      />

      {/* 3. Multi-Currency Price Guide Modal */}
      <PriceGuideModal
        isOpen={activeModal === "price-guide"}
        onClose={closeModal}
        phone={intlConsultationPhone}
      />

      {/* 4. Lookbook & Fine Jewelry Modals */}
      <LookbookModal
        isOpen={activeModal === "collections" || activeModal === "jewelry"}
        onClose={closeModal}
        type={activeModal === "jewelry" ? "jewelry" : "collections"}
        phone={intlConsultationPhone}
      />

      {/* 5. Policy Modal */}
      <Modal
        isOpen={activeModal === "policy"}
        onClose={closeModal}
        title="Consultation & Fitting Policy"
        badge="Atelier Guidelines"
      >
        <div className="space-y-4 text-slate-700">
          <div className="flex gap-3">
            <Clock className="h-5 w-5 shrink-0 text-gold-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Lead Time & Production</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Bridal orders require at least <strong>4 to 8 weeks</strong> advance notice. Bespoke event wear requires <strong>2 to 3 weeks</strong>. Expedited slots are subject to availability.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Scissors className="h-5 w-5 shrink-0 text-gold-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Fittings & Alterations</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Every couture package includes up to <strong>2 physical or virtual fitting sessions</strong> to guarantee the signature Teezar silhouette.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-600 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Deposit & Booking Confirmation</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                A 70% non-refundable commitment deposit is required to secure your production slot and begin fabric sourcing.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <a
            href={`https://wa.me/${intlConsultationPhone}?text=Hello%20Teezar%20Fashion,%20I%20have%20a%20question%20about%20your%20consultation%20policy.`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
          >
            <MessageCircle className="h-4 w-4" />
            Clarify Booking Terms on WhatsApp
          </a>
        </div>
      </Modal>

      {/* 6. About Us Modal */}
      <Modal
        isOpen={activeModal === "about"}
        onClose={closeModal}
        title="About Teezar Fashion"
        badge="The Atelier Story"
      >
        <div className="space-y-3.5 text-slate-600 leading-relaxed text-sm">
          <p>
            <strong>Teezar Fashion</strong> is a premier haute couture fashion house dedicated to crafting timeless, breathtaking silhouettes for modern brides and sophisticated women across the globe.
          </p>
          <p>
            With an uncompromising commitment to structural corsetry, luxurious embellishments, and artisanal African & contemporary textiles, we turn your sartorial dreams into unforgettable masterpieces.
          </p>
          <div className="rounded-2xl border border-gold-300/40 bg-gold-50/60 p-4">
            <h4 className="font-bold text-gold-900 text-xs uppercase tracking-wider">
              Our Vision
            </h4>
            <p className="text-xs text-gold-800 mt-1">
              "To celebrate the elegance, confidence, and heritage of every woman with flawless craftsmanship and bespoke luxury."
            </p>
          </div>
        </div>

        <div className="pt-3">
          <button
            onClick={closeModal}
            className="w-full rounded-xl bg-slate-950 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800"
          >
            Close Overview
          </button>
        </div>
      </Modal>

      {/* Floating VIP WhatsApp Button */}
      <FloatingWhatsApp phone={consultationPhone} />
    </div>
  );
}

export default App;
