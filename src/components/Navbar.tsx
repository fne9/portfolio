import { useState } from "react";
import { useIdioma, type Idioma } from "../i18n";

function SeletorIdioma() {
  const { idioma, mudarIdioma } = useIdioma();
  const opcoes: { valor: Idioma; rotulo: string }[] = [
    { valor: "pt", rotulo: "PT" },
    { valor: "en", rotulo: "EN" },
  ];

  return (
    <div className="flex overflow-hidden rounded-lg border border-borda font-mono text-xs">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          onClick={() => mudarIdioma(opcao.valor)}
          className={`px-3 py-1.5 transition-colors ${
            idioma === opcao.valor
              ? "bg-roxo text-white"
              : "text-zinc-400 hover:bg-painel hover:text-white"
          }`}
          aria-pressed={idioma === opcao.valor}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const { t } = useIdioma();

  const links = [
    { href: "#inicio", rotulo: t.nav.inicio },
    { href: "#sobre", rotulo: t.nav.sobre },
    { href: "#skills", rotulo: t.nav.skills },
    { href: "#projetos", rotulo: t.nav.projetos },
    { href: "#contato", rotulo: t.nav.contato },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-borda bg-fundo/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="font-mono text-lg font-bold text-roxo-claro">
          {"</>"} <span className="text-white">dev</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.rotulo}
              </a>
            </li>
          ))}
          <li>
            <SeletorIdioma />
          </li>
        </ul>

        <div className="flex items-center gap-3 sm:hidden">
          <SeletorIdioma />
          <button
            className="text-zinc-300"
            onClick={() => setAberto(!aberto)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {aberto ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {aberto && (
        <ul className="flex flex-col gap-1 border-t border-borda px-5 py-3 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2 text-zinc-300 hover:bg-painel hover:text-white"
                onClick={() => setAberto(false)}
              >
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
