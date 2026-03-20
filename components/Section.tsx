import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${className}`}
    >
      <div className="mb-10 animate-fade-up">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          Lumibraille
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-3xl text-lg text-slate-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
