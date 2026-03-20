export default function Hero() {
  return (
    <section id="home" className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
      <div className="animate-fade-up">
        <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          Deep-Tech Social Impact Hardware
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Reinventing Inclusive Education Through Dynamic Braille
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">
          Affordable tactile learning devices empowering blind students with literacy and STEM
          access.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Request Early Access
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Download Brochure
          </a>
        </div>
      </div>

      <div className="animate-fade-in">
        <div className="relative h-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg sm:h-80">
          <div className="absolute inset-x-0 top-0 h-10 border-b border-slate-100 bg-slate-50" />
          <div className="absolute left-5 top-3 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-8 pt-14">
            <div className="w-full rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-slate-100 p-6">
              <div className="mb-4 h-2 w-24 rounded-full bg-blue-200" />
              <div className="mb-2 h-2 w-2/3 rounded-full bg-slate-300" />
              <div className="mb-6 h-2 w-1/2 rounded-full bg-slate-300" />
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-3 rounded bg-slate-400/80" />
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-slate-500">Dynamic Braille Device Mockup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
