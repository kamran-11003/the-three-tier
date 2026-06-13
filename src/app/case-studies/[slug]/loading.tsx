// Skeleton shown while any individual case study page loads
export default function CaseStudyLoading() {
  return (
    <div className="bg-ink min-h-screen" aria-busy="true" aria-label="Loading case study">
      {/* Hero skeleton */}
      <div className="relative h-[560px] bg-wire/10 animate-pulse flex items-center">
        <div className="container pt-24 pb-20">
          <div className="h-3 w-28 bg-wire/30 mb-8 animate-pulse" />
          <div className="h-4 w-16 bg-wire/25 mb-4 animate-pulse" />
          <div className="h-14 w-3/4 max-w-xl bg-wire/30 mb-4 animate-pulse" />
          <div className="h-14 w-1/2 max-w-md bg-wire/20 mb-4 animate-pulse" />
          <div className="h-5 w-96 bg-wire/20 mb-6 animate-pulse" />
          <div className="flex gap-6">
            <div className="h-3 w-32 bg-wire/20 animate-pulse" />
            <div className="h-3 w-20 bg-wire/15 animate-pulse" />
            <div className="h-3 w-48 bg-wire/15 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Abstract band skeleton */}
      <div className="bg-ash border-y border-smoke py-14">
        <div className="container">
          <div className="max-w-[700px] mx-auto pl-10 border-l-[3px] border-signal/30 space-y-3">
            <div className="h-4 w-full bg-wire/20 animate-pulse" />
            <div className="h-4 w-5/6 bg-wire/15 animate-pulse" />
            <div className="h-4 w-4/5 bg-wire/10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Article skeleton */}
      <div className="bg-ink py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="col-span-3 hidden lg:block space-y-2 pt-1">
              {[80, 64, 72, 56].map((w) => (
                <div key={w} className={`h-3 bg-wire/20 animate-pulse`} style={{ width: `${w}%` }} />
              ))}
            </div>
            {/* Body */}
            <div className="col-span-12 lg:col-span-8 lg:col-start-4 space-y-16">
              {[0, 1, 2].map((s) => (
                <div key={s}>
                  <div className="h-9 w-72 bg-wire/25 mb-6 animate-pulse" />
                  <div className="space-y-3">
                    {[100, 95, 88, 92, 70].map((w, i) => (
                      <div key={i} className="h-4 bg-wire/15 animate-pulse" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
