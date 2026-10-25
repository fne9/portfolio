import { useEffect, useState } from "react";
import { perfil } from "../data";
import { useIdioma } from "../i18n";

const techsDestaque = ["React", "TypeScript", "Node.js", "TailwindCSS", "MongoDB"];

function useDigitacao(palavras: readonly string[]) {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState("");
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    setIndice(0);
    setTexto("");
    setApagando(false);
  }, [palavras]);

  useEffect(() => {
    const palavra = palavras[indice] ?? "";
    const atraso = apagando ? 50 : texto === palavra ? 1800 : 110;

    const timer = setTimeout(() => {
      if (!apagando && texto === palavra) {
        setApagando(true);
      } else if (apagando && texto === "") {
        setApagando(false);
        setIndice((i) => (i + 1) % palavras.length);
      } else {
        setTexto(palavra.slice(0, texto.length + (apagando ? -1 : 1)));
      }
    }, atraso);

    return () => clearTimeout(timer);
  }, [texto, apagando, indice, palavras]);

  return texto;
}

export default function Hero() {
  const { t, idioma } = useIdioma();
  const palavraAtual = useDigitacao(perfil.taglinePartes[idioma]);

  return (
    <section id="inicio" className="animar-subida flex min-h-[85vh] flex-col justify-center py-20">
      <p className="mb-4 font-mono text-ciano">
        <span className="text-zinc-500">$</span> whoami
      </p>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        {t.hero.saudacao}{" "}
        <span className="bg-gradient-to-r from-roxo-claro via-ciano to-ambar bg-clip-text text-transparent">
          {perfil.nome}
        </span>{" "}
        👋
      </h1>

      <p className="mb-2 text-xl text-zinc-300 sm:text-2xl">
        {perfil.cargo[idioma]} {t.hero.movidoA}{" "}
        <span className="font-mono font-semibold text-ambar">
          {palavraAtual}
          <span className="cursor-digitacao text-roxo-claro">|</span>
        </span>
      </p>

      <p className="mb-8 max-w-2xl leading-relaxed text-zinc-400">{perfil.bio[idioma]}</p>

      <div className="mb-10 flex flex-wrap gap-2">
        {techsDestaque.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-borda bg-painel px-4 py-1.5 font-mono text-sm text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projetos"
          className="rounded-lg bg-roxo px-6 py-3 font-semibold text-white transition-all hover:bg-roxo-claro hover:shadow-lg hover:shadow-roxo/30"
        >
          {t.hero.verProjetos}
        </a>
        <a
          href="#contato"
          className="rounded-lg border border-borda px-6 py-3 font-semibold text-zinc-200 transition-colors hover:border-ciano hover:text-ciano"
        >
          {t.hero.faleComigo}
        </a>
        {perfil.curriculo && (
          <a
            href={perfil.curriculo}
            download
            className="rounded-lg border border-borda px-6 py-3 font-semibold text-zinc-200 transition-colors hover:border-ambar hover:text-ambar"
          >
            {t.hero.baixarCurriculo} ↓
          </a>
        )}
      </div>
    </section>
  );
}
