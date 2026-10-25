import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Idioma = "pt" | "en";

export type Bilingue = { pt: string; en: string };

const textos = {
  pt: {
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      skills: "Skills",
      projetos: "Projetos",
      contato: "Contato",
    },
    hero: {
      saudacao: "Olá, eu sou",
      movidoA: "movido a",
      verProjetos: "Ver projetos",
      faleComigo: "Fale comigo",
      baixarCurriculo: "Baixar currículo",
    },
    sobre: {
      titulo: "Sobre mim",
      complemento:
        "Gosto de escrever código limpo, aprender novas tecnologias e resolver problemas reais com soluções simples.",
      aprendendoSempre: "aprendendoSempre",
    },
    skills: {
      titulo: "Skills",
      categorias: "categorias",
      tecnologias: "tecnologias",
      umaSkill: "skill",
      variasSkills: "skills",
    },
    projetos: {
      titulo: "Projetos",
      subtitulo: "Alguns dos projetos em que venho trabalhando.",
      emBreve: "Em breve",
      verDemo: "Ver demo",
      codigo: "Código",
    },
    contato: {
      comando: "enviar mensagem",
      titulo: "Vamos trabalhar juntos?",
      texto:
        "Estou aberto a novas oportunidades, projetos freelance e parcerias. Manda um e-mail que respondo o mais rápido possível!",
    },
    footer: {
      codigoCom: "código com",
      feitoCom: "Feito com React, TypeScript e TailwindCSS.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobre: "About",
      skills: "Skills",
      projetos: "Projects",
      contato: "Contact",
    },
    hero: {
      saudacao: "Hi, I'm",
      movidoA: "driven by",
      verProjetos: "View projects",
      faleComigo: "Contact me",
      baixarCurriculo: "Download resume",
    },
    sobre: {
      titulo: "About me",
      complemento:
        "I enjoy writing clean code, learning new technologies and solving real problems with simple solutions.",
      aprendendoSempre: "alwaysLearning",
    },
    skills: {
      titulo: "Skills",
      categorias: "categories",
      tecnologias: "technologies",
      umaSkill: "skill",
      variasSkills: "skills",
    },
    projetos: {
      titulo: "Projects",
      subtitulo: "Some of the projects I've been working on.",
      emBreve: "Coming soon",
      verDemo: "Live demo",
      codigo: "Code",
    },
    contato: {
      comando: "send message",
      titulo: "Let's work together?",
      texto:
        "I'm open to new opportunities, freelance projects and partnerships. Send me an email and I'll get back to you as soon as possible!",
    },
    footer: {
      codigoCom: "code with",
      feitoCom: "Built with React, TypeScript and TailwindCSS.",
    },
  },
};

type Textos = (typeof textos)["pt"];

type ContextoIdioma = {
  idioma: Idioma;
  mudarIdioma: (novo: Idioma) => void;
  t: Textos;
};

const Contexto = createContext<ContextoIdioma | null>(null);

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(() =>
    localStorage.getItem("idioma") === "en" ? "en" : "pt"
  );

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
  }, [idioma]);

  return (
    <Contexto.Provider
      value={{ idioma, mudarIdioma: setIdioma, t: textos[idioma] }}
    >
      {children}
    </Contexto.Provider>
  );
}

export function useIdioma() {
  const contexto = useContext(Contexto);
  if (!contexto) {
    throw new Error("useIdioma precisa ser usado dentro de <IdiomaProvider>");
  }
  return contexto;
}
