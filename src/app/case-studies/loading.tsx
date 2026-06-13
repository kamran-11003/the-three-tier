// Skeleton shown instantly while the case studies index page loads
// Prevents blank white flash — uses CSS-only shimmer, zero JS

export default function CaseStudiesLoading() {
  return (
    <div className="bg-ink min-h-screen" aria-busy="true" aria-label="Loading case studies">
      {/* Page header skeleton */}
      <section className="border-b border-wire py-20 pt-36">
        <div className="container">
          <div className="h-3 w-28 bg-wire/40 rounded-none mb-5 animate-pulse" />
          <div className="h-14 w-3/4 max-w-lg bg-wire/30 rounded-none mb-4 animate-pulse" />
          <div className="h-4 w-1/2 max-w-xs bg-wire/20 rounded-none mt-6 animate-pulse" />
        </div>
      </section>

      {/* Cards skeleton */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke border border-smoke">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-ink flex flex-col">
                {/* Image area */}
                <div className="aspect-[16/10] bg-wire/20 animate-pulse" />
                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-wire/30 animate-pulse" />
                    <div className="h-5 w-20 bg-wire/20 animate-pulse" />
                  </div>
                  <div className="h-5 w-full bg-wire/30 animate-pulse" />
                  <div className="h-5 w-4/5 bg-wire/20 animate-pulse" />
                  <div className="h-3 w-full bg-wire/15 animate-pulse" />
                  <div className="h-3 w-4/5 bg-wire/10 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
