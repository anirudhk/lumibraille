export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="animate-fade-up self-center">
        <p className="inline-flex rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          Deep-Tech Social Impact Hardware
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          Reinventing Inclusive Education Through Dynamic Braille
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Affordable tactile learning devices empowering blind students with literacy and STEM
          access.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            Request Early Access
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Download Brochure
          </a>
        </div>
        <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
            <p className="text-xl font-semibold text-slate-900">43M</p>
            <p className="mt-1 text-xs text-slate-600">Blind population globally</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
            <p className="text-xl font-semibold text-slate-900">70%</p>
            <p className="mt-1 text-xs text-slate-600">Target cost reduction</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
            <p className="text-xl font-semibold text-slate-900">10k+</p>
            <p className="mt-1 text-xs text-slate-600">Learners in reach plan</p>
          </div>
        </div>
      </div>

      <div className="animate-fade-in">
        <div className="relative h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-6 shadow-2xl sm:h-[28rem]">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="relative h-full rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                Device Preview
              </span>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
                Multi-line Ready
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <div className="mb-4 h-2 w-24 rounded-full bg-blue-300/60" />
              <div className="mb-2 h-2 w-2/3 rounded-full bg-slate-500" />
              <div className="mb-6 h-2 w-1/2 rounded-full bg-slate-500" />
              <div className="grid grid-cols-6 gap-2.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="h-3 rounded bg-slate-200/70" />
                ))}
              </div>
              <p className="mt-5 text-xs font-medium text-slate-300">Dynamic Braille Device Mockup</p>
            </div>
            <p className="mt-5 text-sm text-slate-200/80">
              Built to bring tactile literacy and STEM parity to classrooms with low-cost, scalable
              deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
