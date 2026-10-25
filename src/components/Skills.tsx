import { skills, type Skill } from "../data";
import { useIdioma } from "../i18n";

function CartaoSkill({ skill }: { skill: Skill }) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-borda bg-painel p-4 transition-colors hover:border-roxo">
      <img
        src={skill.icone}
        alt=""
        className="h-7 w-7 transition-transform group-hover:scale-110"
        loading="lazy"
      />
      <span className="font-medium text-zinc-200">{skill.nome}</span>
    </div>
  );
}

export default function Skills() {
  const { t, idioma } = useIdioma();
  const totalSkills = skills.reduce((soma, grupo) => soma + grupo.itens.length, 0);

  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <h2 className="mb-2 text-3xl font-bold text-white">
        <span className="font-mono text-ciano">{"=>"}</span> {t.skills.titulo}
      </h2>
      <p className="mb-10 text-zinc-500">
        {skills.length} {t.skills.categorias} · {totalSkills} {t.skills.tecnologias}
      </p>

      <div className="space-y-12">
        {skills.map((grupo) => (
          <div key={grupo.categoria.pt}>
            <div className="mb-5">
              <h3 className="font-mono text-sm tracking-widest text-zinc-400 uppercase">
                {grupo.categoria[idioma]}
                <span className="ml-2 rounded-full border border-borda bg-painel px-2 py-0.5 text-xs text-zinc-500 normal-case tracking-normal">
                  {grupo.itens.length}{" "}
                  {grupo.itens.length === 1 ? t.skills.umaSkill : t.skills.variasSkills}
                </span>
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{grupo.descricao[idioma]}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {grupo.itens.map((skill) => (
                <CartaoSkill key={skill.nome} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
