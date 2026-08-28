import { useState } from "react";
import { MessageCircle, Sparkles, CheckCircle2, ShoppingBag, Gem, Truck } from "lucide-react";
import Modal from "./Modal.jsx";

const collectionsData = {
  collections: {
    title: "Ready-to-Wear Atelier",
    badge: "Limited Edition Pieces",
    description: "Handcrafted couture dresses, stylish coordinates, and evening reception outfits with immediate dispatch.",
    items: [
      {
        id: "rtw-1",
        name: "Aurelia Corseted Midi Dress",
        fabric: "Rich Silk Duchesse & Hand-Pleated Accents",
        sizes: "UK 8 - 18",
        price: "₦95,000 (~$65 USD)",
        tag: "Bestseller",
      },
      {
        id: "rtw-2",
        name: "Zahara Sculpted Mermaid Gown",
        fabric: "Heavy Crepe with Swarovski Crystal Waistband",
        sizes: "UK 10 - 16",
        price: "₦145,000 (~$98 USD)",
        tag: "Evening Gala",
      },
      {
        id: "rtw-3",
        name: "Sultana Embroidered Two-Piece Set",
        fabric: "Artisanal Jacquard with Organza Sleeves",
        sizes: "UK 8 - 20",
        price: "₦110,000 (~$75 USD)",
        tag: "Occasion Wear",
      },
      {
        id: "rtw-4",
        name: "Celeste Royal Kimono & Dress Duo",
        fabric: "Shimmering Brocade with Gold Trims",
        sizes: "Free Size (UK 8 - 22)",
        price: "₦85,000 (~$58 USD)",
        tag: "Signature",
      },
    ],
  },
  jewelry: {
    title: "Fine Jewelry & Accessories",
    badge: "Royal Accents",
    description: "Handcrafted bridal crowns, pearl headpieces, statement chokers, and earrings to elevate your look.",
    items: [
      {
        id: "j-1",
        name: "The Imperial Empress Tiara & Crown",
        fabric: "Zirconia Crystals & 18k Gold Plated Base",
        sizes: "Adjustable Bridal Fit",
        price: "₦45,000 (~$30 USD)",
        tag: "Bridal Crown",
      },
      {
        id: "j-2",
        name: "Baroque Freshwater Pearl Choker Set",
        fabric: "Genuine Baroque Pearls & Crystal Clasp",
        sizes: "Includes Matching Drop Earrings",
        price: "₦35,000 (~$24 USD)",
        tag: "Bridal Pearl",
      },
      {
        id: "j-3",
        name: "Cascade Crystal Drop Statement Earrings",
        fabric: "Hypoallergenic Luxury Glass Crystals",
        sizes: "Available in Gold & Silver Finish",
        price: "₦20,000 (~$14 USD)",
        tag: "Red Carpet",
      },
      {
        id: "j-4",
        name: "Artisan Beaded Bridal Clutch Purse",
        fabric: "Full Pearl & Rhinestone Encrusted with Chain",
        sizes: "Compact Evening Size",
        price: "₦55,000 (~$38 USD)",
        tag: "Luxury Accent",
      },
    ],
  },
};

export default function LookbookModal({ isOpen, onClose, type = "collections", phone = "2348166508998" }) {
  const current = collectionsData[type] || collectionsData.collections;

  const handleInquireItem = (itemName) => {
    const text = `Hello Teezar Fashion, I would like to order / inquire about the "${itemName}" from your ${current.title}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={current.title}
      badge={current.badge}
    >
      <div className="space-y-4">
        <p className="text-xs text-slate-600 leading-relaxed">
          {current.description}
        </p>

        {/* Worldwide Delivery Banner */}
        <div className="flex items-center gap-2.5 rounded-xl border border-gold-300/60 bg-gold-50/70 p-3 text-xs text-gold-900">
          <Truck className="h-4 w-4 text-gold-700 shrink-0" />
          <div className="space-y-0.5">
            <span className="font-bold">Worldwide & Nationwide Delivery:</span>
            <p className="text-[0.7rem] text-gold-800">
              Lagos (Same/Next Day) • Nigeria (2-3 Days) • UK, USA, Canada, Europe (3-5 Days via DHL).
            </p>
          </div>
        </div>

        {/* Item Cards */}
        <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
          {current.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white p-4 transition-all hover:border-gold-400 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-950">{item.name}</h4>
                  </div>
                  <span className="mt-0.5 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[0.62rem] font-semibold text-slate-700">
                    {item.tag}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs sm:text-sm font-bold text-gold-700">
                    {item.price}
                  </div>
                </div>
              </div>

              <div className="mt-2 text-[0.72rem] text-slate-500 space-y-0.5">
                <p><strong>Details:</strong> {item.fabric}</p>
                <p><strong>Availability:</strong> {item.sizes}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleInquireItem(item.name)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-[0.72rem] font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold-500 hover:text-noir"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Order / Inquire on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full Catalog Action */}
        <div className="pt-2">
          <a
            href={`https://wa.me/${phone}?text=Hello%20Teezar%20Fashion,%20please%20send%20me%20the%20complete%20catalog%20and%20lookbook%20for%20${encodeURIComponent(
              current.title
            )}.`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 py-3.5 text-xs font-bold uppercase tracking-wider text-noir shadow-gold-glow hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            Request Full Lookbook Catalog
          </a>
        </div>
      </div>
    </Modal>
  );
}
