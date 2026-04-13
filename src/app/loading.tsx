export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f7f1e7] flex flex-col">
      {/* Header skeleton */}
      <div className="h-[72px] bg-[#17120e] border-b border-white/10 animate-pulse" />

      {/* Hero skeleton */}
      <div className="h-[60vh] bg-[#17120e] animate-pulse" />

      {/* Content skeleton */}
      <div className="flex-1 bg-[#fbf7f0] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1480px] space-y-10">
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-[#e8e0d0] animate-shimmer" />
            <div className="h-10 w-80 rounded bg-[#e8e0d0] animate-shimmer" />
            <div className="h-5 w-[480px] max-w-full rounded bg-[#e8e0d0] animate-shimmer" />
          </div>

          {/* Grid skeleton */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-[4/3] rounded-lg bg-[#e8e0d0] animate-shimmer" />
                <div className="h-3 w-20 rounded bg-[#e8e0d0] animate-shimmer" />
                <div className="h-5 w-48 rounded bg-[#e8e0d0] animate-shimmer" />
                <div className="h-4 w-full rounded bg-[#e8e0d0] animate-shimmer" />
                <div className="h-4 w-3/4 rounded bg-[#e8e0d0] animate-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="h-[280px] bg-[#17120e] animate-pulse" />
    </div>
  );
}
