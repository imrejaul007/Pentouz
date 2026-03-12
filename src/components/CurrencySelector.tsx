"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

const currencies = [
  { code: "INR", symbol: "₹", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
];

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency && currencies.find(c => c.code === savedCurrency)) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    localStorage.setItem("selectedCurrency", currency);
  };

  const selected = currencies.find(c => c.code === selectedCurrency);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.15em] text-brand-muted hover:text-brand-ink transition-colors duration-200"
      >
        <Globe className="w-5 h-5" />
        <span>{selectedCurrency}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-2xl border border-brand-border/30 rounded-lg py-2 z-50 w-48">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => handleCurrencySelect(currency.code)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200",
                selectedCurrency === currency.code
                  ? "bg-brand-gold/5 text-brand-ink"
                  : "hover:bg-brand-linen text-brand-ink"
              )}
            >
              <span className="text-2xl">{currency.flag}</span>
              <div className="flex-1 text-left">
                <span className="font-medium">{currency.code}</span>
                <p className="text-sm text-brand-muted">{currency.name}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
