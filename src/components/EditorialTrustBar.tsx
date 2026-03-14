import Link from "next/link";
import { editorialMeta, formatEditorialDate } from "@/data/editorialMeta";

interface EditorialTrustBarProps {
  className?: string;
}

export default function EditorialTrustBar({ className = "" }: EditorialTrustBarProps) {
  return (
    <section className={`py-6 sm:py-8 bg-white border-y border-brand-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid sm:grid-cols-3 gap-4 text-[11px] sm:text-xs text-brand-muted">
          <p>
            <span className="uppercase tracking-[0.12em] text-brand-ink">Pentouz Notes:</span>{" "}
            {editorialMeta.publisher}
          </p>
          <p>
            <span className="uppercase tracking-[0.12em] text-brand-ink">Reviewed:</span>{" "}
            {editorialMeta.reviewer}
          </p>
          <p className="sm:text-right">
            <span className="uppercase tracking-[0.12em] text-brand-ink">Updated:</span>{" "}
            {formatEditorialDate(editorialMeta.updatedOn)}{" "}
            <Link href={editorialMeta.policyPath} className="underline underline-offset-2 hover:text-brand-gold">
              Notes Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
