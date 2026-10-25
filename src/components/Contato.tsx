import { perfil } from "../data";
import { useIdioma } from "../i18n";

export default function Contato() {
  const { t } = useIdioma();

  return (
    <section id="contato" className="scroll-mt-24 py-20">
      <div className="rounded-2xl border border-borda bg-painel p-10 text-center">
        <p className="mb-3 font-mono text-sm text-ciano">
          <span className="text-zinc-500">$</span> {t.contato.comando}
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white">{t.contato.titulo}</h2>
        <p className="mx-auto mb-8 max-w-xl text-zinc-400">{t.contato.texto}</p>

        <a
          href={`mailto:${perfil.email}`}
          className="inline-block rounded-lg bg-roxo px-8 py-3 font-semibold text-white transition-all hover:bg-roxo-claro hover:shadow-lg hover:shadow-roxo/30"
        >
          {perfil.email}
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-400">
          {perfil.github && (
            <a href={perfil.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub ↗
            </a>
          )}
          {perfil.linkedin && (
            <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
