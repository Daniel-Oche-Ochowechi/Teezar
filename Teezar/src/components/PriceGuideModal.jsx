import { useState } from "react";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import Modal from "./Modal.jsx";

const rates = {
  NGN: { symbol: "₦", factor: 1, label: "NGN (₦)" },
  USD: { symbol: "$", factor: 0.00067, label: "USD ($)" },
  GBP: { symbol: "£", factor: 0.00053, label: "GBP (£)" },
  EUR: { symbol: "€", factor: 0.00062, label: "EUR (€)" },
};

const packages = [
  {
    id: "3m-bridal",
    title: "3M Signature Bridal Package",
    tag: "VIP Signature",
    featured: true,
    ngnPrice: "From ₦3,000,000",
    usdPrice: "~$2,000 USD",
    gbpPrice: "~£1,590 GBP",
    eurPrice: "~€1,860 EUR",
    description: "The complete haute couture wedding experience with dedicated fitting & dressing assistance.",
    features: [
      "Custom Masterpiece Bridal Gown",
      "Reception / After-Party Second Look",
      "Custom Cathedral or Royal Veil",
      "Up to 3 Private Fitting Sessions",
      "Day-Of Bridal Dressing Concierge",
    ],
  },
  {
    id: "traditional-bridal",
    title: "Traditional Bridal Ensemble",
    tag: "Aso Oke / George",
    featured: false,
    ngnPrice: "From ₦650,000+",
    usdPrice: "~$435+ USD",
    gbpPrice: "~£345+ GBP",
    eurPrice: "~€400+ EUR",
    description: "Handwoven luxury Aso Oke, embellished George, and royal beaded accoutrements.",
    features: [
      "Intricate Custom Hand-Beading",
      "Structural Corsetry & Snatched Fit",
      "Matching Gele / Auto-Gele Accent",
      "2 Fitting Appointments",
    ],
  },
  {
    id: "asoebi-guest",
    title: "Asoebi & Pepper Wedding Guest",
    tag: "Event Bespoke",
    featured: false,
    ngnPrice: "From ₦75,000 - ₦250,000",
    usdPrice: "~$50 - $170 USD",
    gbpPrice: "~£40 - £135 GBP",
    eurPrice: "~€45 - €155 EUR",
    description: "Flawless red-carpet event tailoring designed to turn heads at any wedding or reception.",
    features: [
      "Signature Teezar Silhouette",
      "Corseted or Flowing Styling",
      "Guaranteed Delivery Timeline",
    ],
  },
  {
    id: "academy",
    title: "Teezar Fashion Academy",
    tag: "3 & 6 Months",
    featured: false,
    ngnPrice: "Cohort Enrollment Open",
    usdPrice: "International Inquiries Welcome",
    gbpPrice: "International Inquiries Welcome",
    eurPrice: "International Inquiries Welcome",
    description: "Comprehensive professional fashion design, pattern drafting, and luxury corsetry curriculum.",
    features: [
      "Beginner to Advanced Masterclass",
      "Pattern Drafting & French Draping",
      "Corsetry & Luxury Finishing",
      "Certificate of Completion",
    ],
  },
];

export default function PriceGuideModal({ isOpen, onClose, phone = "2348166508998" }) {
  const [currency, setCurrency] = useState("NGN");

  const getPrice = (pkg) => {
    switch (currency) {
      case "USD":
        return pkg.usdPrice;
      case "GBP":
        return pkg.gbpPrice;
      case "EUR":
        return pkg.eurPrice;
      default:
        return pkg.ngnPrice;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="2026 Atelier Price Guide"
      badge="Pricing Architecture"
    >
      <div className="space-y-4">
        {/* Currency Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-50 border border-slate-200/90 p-2.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold-600" />
            <span className="text-xs font-bold text-slate-800">Display Currency:</span>
          </div>
          <div className="flex rounded-lg bg-white p-0.5 border border-slate-200">
            {Object.keys(rates).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-md px-2.5 py-1 text-xs font-bold transition-all ${
                  currency === c
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">
          *Estimates shown below. Final quote depends on fabric selection, embellishment density, and rush production timelines.
        </p>

        {/* Packages List */}
        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl border p-4 transition-all ${
                pkg.featured
                  ? "border-gold-400/50 bg-gradient-to-br from-gold-50/60 via-white to-gold-50/30 shadow-sm"
                  : "border-slate-200/80 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-950 font-aglema sm:text-base">
                      {pkg.title}
                    </h4>
                  </div>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider ${
                      pkg.featured
                        ? "bg-gold-200/80 text-gold-900 border border-gold-300"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs sm:text-sm font-bold text-gold-700">
                    {getPrice(pkg)}
                  </div>
                </div>
              </div>

              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="mt-3 space-y-1 border-t border-slate-100 pt-2.5">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[0.72rem] text-slate-600">
                    <CheckCircle2 className="h-3 w-3 text-gold-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WhatsApp Quote Action */}
        <div className="pt-2">
          <a
            href={`https://wa.me/${phone}?text=Hello%20Teezar%20Fashion,%20I%20would%20like%20to%20request%20a%20personalized%20price%20quote%20for%20an%20outfit.`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-slate-800"
          >
            <MessageCircle className="h-4 w-4" />
            Request Custom Quotation on WhatsApp
          </a>
        </div>
      </div>
    </Modal>
  );
}
