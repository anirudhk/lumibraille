import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const literacyGap = [
  "43M blind globally",
  "High device costs (₹2L+)",
  "Audio tools do not build literacy",
  "STEM access remains limited",
];

const solutionFeatures = [
  {
    title: "Real-time Braille Conversion",
    description:
      "Converts digital textbook content into tactile Braille lines instantly for interactive classroom use.",
  },
  {
    title: "Multi-line STEM Display",
    description:
      "Presents formulas, equations, and structured layouts in multi-line tactile form for deeper STEM comprehension.",
  },
  {
    title: "Offline Learning Mode",
    description:
      "Supports preloaded textbooks and resources so schools can continue learning without constant internet access.",
  },
  {
    title: "Modular & Scalable Design",
    description:
      "Built with modular components to lower maintenance costs and scale deployments for institutions and NGOs.",
  },
];

const impactStats = [
  { value: "10,000+", label: "Target students reached" },
  { value: "100+", label: "Partner schools vision" },
  { value: "70%", label: "Cost reduction goal" },
  { value: "STEM parity", label: "Long-term learning focus" },
];

export default function Home() {
  return (
    <main className="text-slate-900">
      <Navbar />
      <Hero />

      <Section id="product" title="The Literacy Gap">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
          <p className="text-slate-600">
            Millions of blind students remain excluded from quality literacy and STEM education due
            to expensive hardware and limited tactile-first tools.
          </p>
          <ul className="grid gap-3">
            {literacyGap.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        title="Our Solution"
        subtitle="A laptop-sized tactile learning workstation delivering multi-line dynamic Braille, offline textbook support, and institution-ready deployment."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {solutionFeatures.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Section>

      <Section id="technology" title="Engineering Innovation">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
          <div className="space-y-4 text-slate-600">
            <p>
              Tactora combines deep-tech research with practical deployment constraints to make
              tactile learning devices affordable and reliable for scale.
            </p>
            <p>
              Our engineering stack focuses on high-performance tactile output while reducing bill
              of materials through alternative actuator pathways and modular assemblies.
            </p>
          </div>
          <ul className="space-y-4 text-slate-700">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              Alternative actuator research
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              Cost-optimized architecture
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              Modular hardware design
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              Made-for-India manufacturing vision
            </li>
          </ul>
        </div>
      </Section>

      <Section id="impact" title="Measurable Impact">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-2xl font-semibold tracking-tight text-blue-700">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="founder" title="Founder">
        <article className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Sita Rasagna Vakkalanka</h3>
          <p className="mt-2 text-blue-700">PhD Scholar, Distributed Systems &amp; Security</p>
          <p className="mt-4 text-slate-600">
            IEEE-published researcher and mission-driven founder building inclusive hardware for
            education equity. She leads Tactora&apos;s vision to democratize literacy and STEM access
            for blind students through practical, scalable deep-tech innovation.
          </p>
        </article>
      </Section>

      <Section id="contact" title="Contact">
        <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Name
            <input
              type="text"
              className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-200 transition focus:ring-2"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-200 transition focus:ring-2"
              placeholder="you@organization.org"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
            Organization
            <input
              type="text"
              className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-200 transition focus:ring-2"
              placeholder="School, NGO, or partner organization"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
            Message
            <textarea
              rows={5}
              className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-blue-200 transition focus:ring-2"
              placeholder="How can we collaborate?"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="button"
              className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </Section>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Tactora</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-blue-700">
              LinkedIn
            </a>
            <a href="mailto:hello@tactora.org" className="transition hover:text-blue-700">
              hello@tactora.org
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
