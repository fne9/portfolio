import { perfil, stats } from "../data";
import { useIdioma } from "../i18n";

export default function Sobre() {
  const { t, idioma } = useIdioma();

  return (
    <section id="sobre" className="scroll-mt-24 py-20">
      <h2 className="mb-10 text-3xl font-bold text-white">
        <span className="font-mono text-roxo-claro">{"{ }"}</span> {t.sobre.titulo}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-x-auto rounded-xl border border-borda bg-painel p-6 font-mono text-sm leading-7">
          <p className="text-zinc-500">// dev.ts</p>
          <p>
            <span className="text-roxo-claro">const</span>{" "}
            <span className="text-ciano">dev</span> = {"{"}
          </p>
          <p className="pl-5">
            {idioma === "pt" ? "nome" : "name"}:{" "}
            <span className="text-ambar">"{perfil.nome}"</span>,
          </p>
          <p className="pl-5">
            frontEnd: <span className="text-ambar">["React", "TypeScript", "Tailwind"]</span>,
          </p>
          <p className="pl-5">
            backEnd: <span className="text-ambar">["Node.js"]</span>,
          </p>
          <p className="pl-5">
            {idioma === "pt" ? "bancos" : "databases"}:{" "}
            <span className="text-ambar">["MySQL", "MongoDB"]</span>,
          </p>
          <p className="pl-5">
            {t.sobre.aprendendoSempre}: <span className="text-ciano">true</span>,
          </p>
          <p>{"};"}</p>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <p className="leading-relaxed text-zinc-400">
            {perfil.bio[idioma]} {t.sobre.complemento}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.rotulo.pt}
                className="rounded-xl border border-borda bg-painel p-4 text-center transition-colors hover:border-roxo"
              >
                <div className="text-2xl">{stat.emoji}</div>
                <div className="mt-1 text-2xl font-bold text-white">{stat.valor}</div>
                <div className="mt-1 text-xs text-zinc-500">{stat.rotulo[idioma]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
