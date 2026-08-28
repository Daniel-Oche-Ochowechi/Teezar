import { useState } from "react";
import { Calendar, Clock, Sparkles, MessageCircle, User, Phone, Check } from "lucide-react";
import Modal from "./Modal.jsx";

const services = [
  { id: "bridal-3m", name: "3M Signature Bridal Package", badge: "VIP Couture" },
  { id: "bespoke-consult", name: "Bespoke Design & Fabric Assessment", badge: "Custom" },
  { id: "fixed-consult", name: "Fixed Price Consultation & Fitting", badge: "Standard" },
  { id: "asoebi-guest", name: "Asoebi / Wedding Guest Bespoke", badge: "Event" },
  { id: "academy", name: "Teezar Fashion Academy Enrollment", badge: "Education" },
];

const timeSlots = [
  "10:00 AM - 11:30 AM",
  "12:00 PM - 01:30 PM",
  "02:00 PM - 03:30 PM",
  "04:00 PM - 05:30 PM",
];

export default function BookingModal({ isOpen, onClose, phone = "2348166508998" }) {
  const [service, setService] = useState(services[0].name);
  const [clientName, setClientName] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState(timeSlots[0]);
  const [consultType, setConsultType] = useState("Physical Atelier (Lagos)");
  const [notes, setNotes] = useState("");

  const handleBookOnWhatsApp = (e) => {
    e.preventDefault();
    const message = `✨ *NEW ATELIER CONSULTATION REQUEST* ✨
-----------------------------------------
👤 *Client Name:* ${clientName || "Valued Client"}
🏷️ *Service:* ${service}
📍 *Type:* ${consultType}
📅 *Preferred Date:* ${preferredDate || "Earliest Available"}
⏰ *Preferred Time:* ${preferredTime}
📝 *Vision / Notes:* ${notes || "None provided"}
-----------------------------------------
Hello Teezar Fashion, I would like to confirm my appointment slot.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Book Atelier Consultation"
      badge="Appointment Desk"
    >
      <form onSubmit={handleBookOnWhatsApp} className="space-y-4">
        <p className="text-xs text-slate-600">
          Select your desired service and preferred appointment slot. Our lead stylist will review and confirm your reservation directly.
        </p>

        {/* Service Selector */}
        <div className="space-y-1.5">
          <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
            Select Couture Service
          </label>
          <div className="space-y-2">
            {services.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setService(item.name)}
                className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all ${
                  service === item.name
                    ? "border-gold-400 bg-gold-50/80 text-slate-900 shadow-sm"
                    : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      service === item.name
                        ? "border-gold-600 bg-gold-500 text-white"
                        : "border-slate-300"
                    }`}
                  >
                    {service === item.name && <Check className="h-3 w-3" />}
                  </div>
                  <span className="text-xs font-semibold">{item.name}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.65rem] font-medium text-slate-600">
                  {item.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Client Name */}
        <div className="space-y-1.5">
          <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
            Your Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              required
              placeholder="e.g. Chioma Adebayo"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
            />
          </div>
        </div>

        {/* Consultation Mode */}
        <div className="space-y-1.5">
          <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
            Consultation Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["Physical Atelier (Lagos)", "Virtual / Online (Global)"].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setConsultType(mode)}
                className={`rounded-xl border py-2.5 px-3 text-center text-xs font-semibold transition-all ${
                  consultType === mode
                    ? "border-gold-400 bg-gold-50 text-gold-900 shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Date & Time Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-3 text-xs text-slate-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
              Preferred Time Slot
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-3 text-xs text-slate-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vision / Notes */}
        <div className="space-y-1.5">
          <label className="text-[0.75rem] font-bold uppercase tracking-wider text-slate-700">
            Event Details / Special Requests (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Wedding reception look, need luxury corset with pearls, wedding date in December."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-xl border border-slate-200/90 bg-white p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
          />
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 py-3.5 text-xs font-bold uppercase tracking-wider text-noir shadow-gold-glow transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            Confirm Booking on WhatsApp
          </button>
        </div>
      </form>
    </Modal>
  );
}
