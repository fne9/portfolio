import { perfil } from "../data";
import { useIdioma } from "../i18n";

export default function Footer() {
  const { t } = useIdioma();

  return (
    <footer className="border-t border-borda py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 text-center text-sm text-zinc-500 sm:px-8">
        <p className="font-mono">
          {"<"}
          {t.footer.codigoCom} <span className="text-roxo-claro">♥</span>
          {" />"}
        </p>
        <p>
          © {new Date().getFullYear()} {perfil.nome}. {t.footer.feitoCom}
        </p>
      </div>
    </footer>
  );
}
