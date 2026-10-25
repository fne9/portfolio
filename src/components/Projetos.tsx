import { useState } from "react";
import { projetos, type Projeto } from "../data";
import { useIdioma } from "../i18n";

function GaleriaProjeto({ projeto }: { projeto: Projeto }) {
  const imagens = projeto.imagens ?? [];
  const { idioma } = useIdioma();
  const [atual, setAtual] = useState(0);
  const imagem = imagens[atual];

  return (
    <div className="border-b border-borda bg-black">
      <a
        href={projeto.linkDemo || imagem.src}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden"
      >
        <img
          src={imagem.src}
          alt={imagem.alt[idioma]}
          loading="lazy"
          style={{ aspectRatio: projeto.proporcao ?? "1919 / 885" }}
          className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </a>
      {imagens.length > 1 && (
        <div className="flex gap-3 border-t border-borda bg-fundo/60 p-3">
          {imagens.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setAtual(i)}
              aria-label={img.alt[idioma]}
              aria-pressed={i === atual}
              className={`overflow-hidden rounded-md border-2 transition-all ${
                i === atual
                  ? "border-ciano"
                  : "border-borda opacity-50 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt="" className="h-12 w-24 object-cover object-top sm:h-16 sm:w-32" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Links({ projeto }: { projeto: Projeto }) {
  const { t } = useIdioma();
  if (projeto.emBreve || (!projeto.linkDemo && !projeto.linkCodigo)) return null;

  return (
    <div className="flex gap-4 text-sm">
      {projeto.linkDemo && (
        <a
          href={projeto.linkDemo}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-roxo-claro hover:underline"
        >
          {t.projetos.verDemo} ↗
        </a>
      )}
      {projeto.linkCodigo && (
        <a
          href={projeto.linkCodigo}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-zinc-400 hover:text-white hover:underline"
        >
          {t.projetos.codigo} ↗
        </a>
      )}
    </div>
  );
}

function Tecnologias({ tecnologias }: { tecnologias: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tech) => (
        <span key={tech} className="font-mono text-xs text-ciano">
          {tech}
        </span>
      ))}
    </div>
  );
}

function CartaoDestaque({ projeto }: { projeto: Projeto }) {
  const { idioma } = useIdioma();

  return (
    <article className="group overflow-hidden rounded-xl border border-borda bg-painel transition-all hover:border-ciano hover:shadow-lg hover:shadow-ciano/10 sm:col-span-2">
      {projeto.imagens && <GaleriaProjeto projeto={projeto} />}

      <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h3 className="mb-3 text-2xl font-semibold text-white">{projeto.titulo[idioma]}</h3>
          <p className="max-w-2xl leading-relaxed text-zinc-400">{projeto.descricao[idioma]}</p>
        </div>
        <div className="flex flex-col gap-4 md:max-w-56 md:items-end md:text-right">
          <Tecnologias tecnologias={projeto.tecnologias} />
          <Links projeto={projeto} />
        </div>
      </div>
    </article>
  );
}

function CartaoProjeto({ projeto }: { projeto: Projeto }) {
  const { t, idioma } = useIdioma();

  return (
    <article className="flex flex-col rounded-xl border border-borda bg-painel p-6 transition-all hover:-translate-y-1 hover:border-ciano hover:shadow-lg hover:shadow-ciano/10">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-2xl text-roxo-claro">📁</span>
        {projeto.emBreve && (
          <span className="rounded-full border border-ambar/40 bg-ambar/10 px-3 py-1 text-xs font-medium text-ambar">
            {t.projetos.emBreve}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">{projeto.titulo[idioma]}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
        {projeto.descricao[idioma]}
      </p>

      <div className="mb-4">
        <Tecnologias tecnologias={projeto.tecnologias} />
      </div>
      <Links projeto={projeto} />
    </article>
  );
}

export default function Projetos() {
  const { t } = useIdioma();

  return (
    <section id="projetos" className="scroll-mt-24 py-20">
      <h2 className="mb-2 text-3xl font-bold text-white">
        <span className="font-mono text-ambar">{"</>"}</span> {t.projetos.titulo}
      </h2>
      <p className="mb-10 text-zinc-500">{t.projetos.subtitulo}</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projetos.map((projeto, i) =>
          projeto.imagens?.length ? (
            <CartaoDestaque key={i} projeto={projeto} />
          ) : (
            <CartaoProjeto key={i} projeto={projeto} />
          )
        )}
      </div>
    </section>
  );
}
