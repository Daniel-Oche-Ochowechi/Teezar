import { useState } from "react";
import { Scissors, Copy, Check, MessageCircle, HelpCircle } from "lucide-react";
import Modal from "./Modal.jsx";

const measurementFields = [
  { id: "bust", label: "Bust / Chest", placeholder: "e.g. 36", tip: "Around the fullest part of your bust" },
  { id: "underbust", label: "Underbust", placeholder: "e.g. 30", tip: "Directly under your bust where the bra band sits" },
  { id: "waist", label: "Natural Waist", placeholder: "e.g. 28", tip: "Narrowest part of your torso, above the belly button" },
  { id: "highHip", label: "High Hip", placeholder: "e.g. 34", tip: "Around the pelvic bone (approx. 4 inches below waist)" },
  { id: "fullHip", label: "Full / Low Hip", placeholder: "e.g. 40", tip: "Around the fullest part of your hips/buttocks" },
  { id: "shoulder", label: "Shoulder to Shoulder", placeholder: "e.g. 15", tip: "From the edge of one shoulder bone across to the other" },
  { id: "shoulderToWaist", label: "Shoulder to Natural Waist", placeholder: "e.g. 16", tip: "From top of shoulder over bust apex down to waist" },
  { id: "dressLength", label: "Full Dress / Gown Length", placeholder: "e.g. 60", tip: "From top of shoulder to desired floor length (with heels)" },
  { id: "sleeveLength", label: "Sleeve Length", placeholder: "e.g. 24", tip: "From shoulder tip to wrist bone" },
  { id: "roundArm", label: "Round Arm / Bicep", placeholder: "e.g. 12", tip: "Around the fullest part of upper arm" },
];

export default function MeasurementModal({ isOpen, onClose, phone = "2348166508998" }) {
  const [unit, setUnit] = useState("Inches");
  const [clientName, setClientName] = useState("");
  const [outfitType, setOutfitType] = useState("Bridal Gown");
  const [values, setValues] = useState({});
  const [copied, setCopied] = useState(false);

  const handleInputChange = (fieldId, val) => {
    setValues((prev) => ({ ...prev, [fieldId]: val }));
  };

  const generateFormattedMessage = () => {
    let text = `📏 *TEEZAR BESPOKE MEASUREMENT SUBMISSION* 📏\n`;
    text += `-----------------------------------------\n`;
    text += `👤 *Client Name:* ${clientName || "Valued Client"}\n`;
    text += `👗 *Outfit Type:* ${outfitType}\n`;
    text += `📐 *Unit:* ${unit}\n`;
    text += `-----------------------------------------\n`;

    measurementFields.forEach((f) => {
      const val = values[f.id];
      if (val) {
        text += `• ${f.label}: ${val} ${unit.toLowerCase()}\n`;
      }
    });

    text += `-----------------------------------------\n`;
    text += `Hello Teezar Fashion, here are my bespoke fitting measurements.`;
    return text;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formatted = generateFormattedMessage();
    const encoded = encodeURIComponent(formatted);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
    onClose();
  };

  const handleCopy = () => {
    const formatted = generateFormattedMessage();
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Bespoke Measurement Form"
      badge="Custom Fit Guide"
    >
      <form onSubmit={handleSendWhatsApp} className="space-y-4">
        <p className="text-xs text-slate-600">
          Provide your accurate body measurements for a customized couture fit. Use a flexible tape measure over minimal undergarments.
        </p>

        {/* Client & Outfit Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Zainab Ibrahim"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-gold-400 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-700">
              Outfit Category
            </label>
            <select
              value={outfitType}
              onChange={(e) => setOutfitType(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-gold-400 focus:outline-none"
            >
              <option value="Bridal Wedding Gown">Bridal Wedding Gown</option>
              <option value="Reception / Second Look">Reception / Second Look</option>
              <option value="Traditional Aso Oke / George">Traditional Aso Oke / George</option>
              <option value="Asoebi Guest Style">Asoebi Guest Style</option>
              <option value="Civil Court Wedding">Civil Court Wedding</option>
              <option value="Luxury Corset Dress">Luxury Corset Dress</option>
            </select>
          </div>
        </div>

        {/* Unit Selector */}
        <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/80 p-2.5">
          <span className="text-xs font-semibold text-slate-700">Measurement Unit:</span>
          <div className="inline-flex rounded-lg bg-white p-0.5 border border-slate-200">
            {["Inches", "Centimeters (cm)"].map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUnit(u.startsWith("Inches") ? "Inches" : "CM")}
                className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                  (unit === "Inches" && u.startsWith("Inches")) || (unit === "CM" && u.startsWith("Centimeters"))
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {u.startsWith("Inches") ? "Inches (in)" : "CM (cm)"}
              </button>
            ))}
          </div>
        </div>

        {/* Measurement Grid */}
        <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {measurementFields.map((field) => (
              <div key={field.id} className="rounded-xl border border-slate-200/80 bg-white p-2.5">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[0.72rem] font-bold text-slate-800">
                    {field.label}
                  </label>
                  <span className="text-[0.65rem] font-semibold text-slate-400">
                    {unit}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={values[field.id] || ""}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 placeholder:text-slate-300 focus:border-gold-400 focus:outline-none"
                />
                <p className="text-[0.62rem] text-slate-400 mt-1 flex items-center gap-1">
                  <HelpCircle className="h-2.5 w-2.5 shrink-0" />
                  {field.tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions: Send WhatsApp & Copy */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 py-3 text-xs font-bold uppercase tracking-wider text-noir shadow-gold-glow hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            Send to Atelier on WhatsApp
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? "Copied!" : "Copy Text"}</span>
          </button>
        </div>
      </form>
    </Modal>
  );
}
