"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const quickSearches = [
  { label: "Ooty", href: "/destinations/ooty" },
  { label: "Lavelle Road", href: "/destinations/lavelle-road" },
  { label: "Indiranagar", href: "/destinations/indiranagar" },
  { label: "Penthouse", href: "/destinations/indiranagar" },
  { label: "Suites", href: "/destinations" },
  { label: "Meeting Rooms", href: "/destinations" },
];

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search properties, destinations, amenities..." }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Simple navigation - in production this would redirect to search page
      alert(`Search for: ${query}`);
    }
  };

  const handleQuickSearch = (term: string) => {
    setQuery(term);
    setIsOpen(false);
    };

  const clearSearch = () => {
    setQuery("");
    router.push("/destinations");
  };

  return (
    <div className="relative w-full">
      {/* Search Button - Desktop */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center gap-3 px-4 py-3 bg-white/10 border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300"
      >
        <Search className="w-5 h-5 text-brand-muted group-hover:text-brand-gold" strokeWidth={1.5} />
        <span className="text-sm text-brand-ink">Search</span>
      </button>

      {/* Search Panel */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 w-full sm:w-96 bg-white shadow-2xl transition-all duration-300 ease-out z-50",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border/20">
          <h2 className="text-lg font-display font-light text-brand-ink">
            Search
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-brand-muted hover:text-brand-ink transition-colors duration-200"
            aria-label="Close search"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Quick Links */}
        <div className="px-6 py-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-accent mb-4 font-medium">
            Quick Search
          </p>
          <div className="space-y-2">
            {quickSearches.map((item) => (
              <button
                key={item.label}
                onClick={() => alert(`Navigating to: ${item.label} properties")}
                className="flex items-center gap-3 w-full px-4 py-3 bg-brand-linen border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-sm transition-all duration-300 text-left"
              >
                <span className="flex-1 text-brand-ink group-hover:text-brand-accent">{item.label}</span>
                <div className="w-8 h-[1px] bg-brand-gold/30 transition-all duration-500 group-hover:w-full"></div>
              </button>
                className="flex items-center gap-3 w-full px-4 py-3 bg-brand-linen border border-brand-border/30 hover:border-brand-gold/50 hover:shadow-sm transition-all duration-300 text-left"
              >
                <span className="flex-1 text-brand-ink group-hover:text-brand-accent">{item.label}</span>
                <div className="w-8 h-[1px] bg-brand-gold/30 transition-all duration-500 group-hover:w-full"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="px-6 py-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 w-5 h-5 text-brand-muted" strokeWidth={1.5} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="w-full pl-12 pr-4 py-3 bg-brand-linen border border-brand-border/30 text-brand-ink placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 text-base"
            />
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 p-1.5 text-brand-muted hover:text-brand-ink transition-colors duration-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={!query.trim()}
            className="w-full bg-brand-ink text-white py-3 pl-12 text-[11px] uppercase tracking-[0.2em] hover:bg-brand-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-light"
          >
            Search Properties
          </button>
        </form>

        {/* Results Preview (Desktop) */}
        {query.trim() && (
          <div className="px-6 py-4 border-t border-brand-border/20">
            <p className="text-sm text-brand-muted">Showing results for: <strong>{query}</strong></p>
            <div className="grid grid-cols-3 gap-4">
              <Link
                href="/destinations/ooty"
                onClick={() => setIsOpen(false)}
                className="group bg-white border border-brand-border/30 p-4 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg font-display font-light text-brand-ink group-hover:text-brand-accent">Ooty</span>
                <p className="text-sm text-brand-muted mt-1">Hillside Retreat</p>
              </Link>
              <Link
                href="/destinations/lavelle-road"
                onClick={() => setIsOpen(false)}
                className="group bg-white border border-brand-border/30 p-4 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg font-display font-light text-brand-ink group-hover:text-brand-accent">Lavelle Road</span>
                <p className="text-sm text-brand-muted mt-1">Studio Rooms</p>
              </Link>
              <Link
                href="/destinations/indiranagar"
                onClick={() => setIsOpen(false)}
                className="group bg-white border border-brand-border/30 p-4 hover:border-brand-gold/50 hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg font-display font-light text-brand-ink group-hover:text-brand-accent">Indiranagar</span>
                <p className="text-sm text-brand-muted mt-1">3-Bedroom Penthouse</p>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close panel when clicking outside */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
          aria-label="Close search overlay"
        />
      )}
    </div>
  );
}
