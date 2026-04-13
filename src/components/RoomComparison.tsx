"use client";

import { useState } from "react";
import { Check, Users, Bath, Home, Wifi, Coffee, Utensils, MapPin, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Room {
  id: string;
  name: string;
  size: string;
  bedType: string;
  price: string;
  perNight?: string;
}

const rooms: Room[] = [
  {
    id: "king-studio",
    name: "King Studio",
    size: "475 sq ft",
    bedType: "King Bed",
    price: "₹8,500",
    perNight: "₹6,800",
  },
  {
    id: "queen-studio",
    name: "Queen Studio",
    size: "450 sq ft",
    bedType: "Queen Bed",
    price: "₹7,500",
    perNight: "₹6,200",
  },
  {
    id: "superior-studio",
    name: "Superior Studio",
    size: "450 sq ft",
    bedType: "Twin Beds",
    price: "₹7,000",
    perNight: "₹6,300",
  },
  {
    id: "three-bedroom",
    name: "Three Bedroom Penthouse",
    size: "6,000 sq ft",
    bedType: "3 Bedrooms",
    price: "₹25,000",
    perNight: "₹20,000",
  },
  {
    id: "heritage-suite",
    name: "Heritage Suite",
    size: "900 sq ft",
    bedType: "Four-Poster Bed",
    price: "₹15,000",
    perNight: "₹12,000",
  },
  {
    id: "garden-view",
    name: "Garden View Room",
    size: "500 sq ft",
    bedType: "Queen Bed",
    price: "₹10,000",
    perNight: "₹8,000",
  },
  {
    id: "mountain-retreat",
    name: "Mountain Retreat",
    size: "450 sq ft",
    bedType: "Queen Bed",
    price: "₹11,000",
    perNight: "₹8,800",
  },
];

const allFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Utensils, label: "Room Service" },
  { icon: Coffee, label: "Kitchenette" },
  { icon: Bath, label: "En-suite Bathroom" },
  { icon: Users, label: "Up to 2 Guests" },
  { icon: Home, label: "Housekeeping" },
  { icon: MapPin, label: "City Views" },
];

interface RoomComparisonProps {
  title?: string;
  subtitle?: string;
}

export default function RoomComparison({ title = "Compare Our Rooms", subtitle }: RoomComparisonProps) {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  const toggleRoom = (roomId: string) => {
    setSelectedRooms(prev =>
      prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  return (
    <section className="py-section-xl bg-white relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-brand-accent mb-6 font-medium">
            Room Comparison
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-brand-ink mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-body-lg text-brand-body max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-px bg-brand-gold mx-auto mb-12"></div>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-brand-border/30">
                <th className="text-left py-4 px-4 text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium w-1/3">
                  Room Type
                </th>
                <th className="text-left py-4 px-4 text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium w-1/6">
                  Size
                </th>
                <th className="text-left py-4 px-4 text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium w-1/6">
                  Bed Type
                </th>
                <th className="text-center py-4 px-4 text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium w-1/6">
                  Price
                </th>
                <th className="text-center py-4 px-4 text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium w-1/6">
                  Compare
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.id}
                  className={cn(
                    "border-b border-brand-border/20 transition-colors duration-300",
                    selectedRooms.includes(room.id) ? "bg-brand-gold/5" : ""
                  )}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-3">
                      {selectedRooms.includes(room.id) ? (
                        <Check className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-brand-border/30 mt-1 flex-shrink-0"></div>
                      )}
                      <div>
                        <p className="font-display text-base font-light text-brand-ink mb-1">
                          {room.name}
                        </p>
                        <p className="text-sm text-brand-muted">{room.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-brand-ink">
                      {room.bedType}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-lg font-display font-light text-brand-accent">
                      {room.price}
                    </p>
                    {room.perNight && (
                      <p className="text-xs text-brand-muted">from {room.perNight}/night</p>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => toggleRoom(room.id)}
                      className={cn(
                        "px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all duration-300",
                        selectedRooms.includes(room.id)
                          ? "bg-brand-gold text-brand-ink"
                          : "border border-brand-border text-brand-ink hover:border-brand-gold hover:text-brand-accent"
                      )}
                    >
                      {selectedRooms.includes(room.id) ? "Selected" : "Compare"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border/20">
          <h4 className="font-display text-lg font-light text-brand-ink mb-6">
            Included Amenities
          </h4>
          <div className="flex flex-wrap gap-4">
            {allFeatures.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-linen border border-brand-border/30 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-brand-muted">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
