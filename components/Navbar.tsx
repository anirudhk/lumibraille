const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#impact", label: "Impact" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
          LUMIBRAILLE
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Request Demo
        </a>
      </nav>
    </header>
  );
}
