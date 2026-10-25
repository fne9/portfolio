import type { Bilingue } from "./i18n";

export const perfil = {
  nome: "Angelo",
  cargo: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer",
  } as Bilingue,
  email: "angelonovais76@gmail.com",
  bio: {
    pt: "Desenvolvedor apaixonado por transformar ideias em aplicações web modernas. Trabalho do front-end ao banco de dados, criando interfaces rápidas e APIs sólidas.",
    en: "Developer passionate about turning ideas into modern web applications. I work from the front-end to the database, building fast interfaces and solid APIs.",
  } as Bilingue,
  taglinePartes: {
    pt: ["curiosidade", "código", "produto"],
    en: ["curiosity", "code", "product"],
  },
  github: "https://github.com/fne9",
  linkedin: "https://linkedin.com/in/a3j",
  curriculo: "",
};

export const stats: { emoji: string; valor: string; rotulo: Bilingue }[] = [
  { emoji: "🚀", valor: "10+", rotulo: { pt: "Projetos", en: "Projects" } },
  { emoji: "🧩", valor: "10", rotulo: { pt: "Tecnologias", en: "Technologies" } },
  { emoji: "📚", valor: "∞", rotulo: { pt: "Aprendendo sempre", en: "Always learning" } },
];

export type Skill = {
  nome: string;
  icone: string;
};

const devicon = (slug: string, variante = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variante}.svg`;

export const skills: {
  categoria: Bilingue;
  descricao: Bilingue;
  itens: Skill[];
}[] = [
  {
    categoria: { pt: "Front-end", en: "Front-end" },
    descricao: {
      pt: "Construindo interfaces que as pessoas gostam de usar",
      en: "Building interfaces people love to use",
    },
    itens: [
      { nome: "HTML5", icone: devicon("html5") },
      { nome: "CSS3", icone: devicon("css3") },
      { nome: "JavaScript", icone: devicon("javascript") },
      { nome: "React", icone: devicon("react") },
      { nome: "TailwindCSS", icone: devicon("tailwindcss") },
      { nome: "Bootstrap", icone: devicon("bootstrap") },
      { nome: "TypeScript", icone: devicon("typescript") },
    ],
  },
  {
    categoria: { pt: "Back-end", en: "Back-end" },
    descricao: {
      pt: "Criando APIs e sistemas escaláveis",
      en: "Building scalable APIs and systems",
    },
    itens: [{ nome: "Node.js", icone: devicon("nodejs") }],
  },
  {
    categoria: { pt: "Banco de Dados", en: "Database" },
    descricao: {
      pt: "Guardando os dados do jeito certo",
      en: "Storing data the right way",
    },
    itens: [
      { nome: "MySQL", icone: devicon("mysql") },
      { nome: "MongoDB", icone: devicon("mongodb") },
    ],
  },
];

export type Projeto = {
  titulo: Bilingue;
  descricao: Bilingue;
  tecnologias: string[];
  imagens?: { src: string; alt: Bilingue }[];
  proporcao?: string;
  linkDemo?: string;
  linkCodigo?: string;
  emBreve?: boolean;
};

export const projetos: Projeto[] = [
  {
    titulo: { pt: "Radar Crypto", en: "Radar Crypto" },
    descricao: {
      pt: "Feito para ser certeiro: acompanha criptomoedas em tempo real pela API da Binance e me notifica no Telegram quando uma moeda atinge um preço-alvo ou uma variação percentual. Por trás, um servidor Node.js confere os preços a cada 15 segundos e manda a mensagem assim que algum alerta bate.",
      en: "Built to be precise: tracks cryptocurrencies in real time through the Binance API and notifies me on Telegram when a coin hits a target price or a percentage change. Behind the scenes, a Node.js server checks prices every 15 seconds and sends the message as soon as an alert triggers.",
    },
    tecnologias: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Fastify", "Prisma"],
    imagens: [
      {
        src: "/projetos/radar-crypto.png",
        alt: {
          pt: "Resumo de mercado do Radar Crypto com cartões de preço de oito criptomoedas",
          en: "Radar Crypto market summary with price cards for eight cryptocurrencies",
        },
      },
      {
        src: "/projetos/radar-crypto-grafico.png",
        alt: {
          pt: "Gráfico de preço da Solana no período de 1 mês no Radar Crypto",
          en: "Solana one-month price chart in Radar Crypto",
        },
      },
    ],
  },
  {
    titulo: { pt: "Analisador de Xadrez", en: "Chess Analyzer" },
    descricao: {
      pt: "Conectado à API pública do Chess.com: basta colar o link da partida (ou o PGN) que ele busca o jogo e roda o Stockfish lance a lance, mostrando a barra de avaliação, classificando cada jogada de Brilhante a Blunder e calculando a precisão e o rating de performance de cada lado. Os erros viram puzzles com repetição espaçada para revisar depois, e um dashboard acompanha a evolução com metas semanais, streak e conquistas — dá até para comparar duas partidas lado a lado.",
      en: "Connected to the public Chess.com API: just paste the game link (or the PGN) and it fetches the game and runs Stockfish move by move, showing the evaluation bar, rating each move from Brilliant to Blunder and computing each side's accuracy and performance rating. Mistakes become spaced-repetition puzzles to review later, and a dashboard tracks progress with weekly goals, streaks and achievements — you can even compare two games side by side.",
    },
    tecnologias: ["React", "TypeScript", "Stockfish", "Chess.com API"],
    linkDemo: "https://chess.angelmnv.dev/",
    proporcao: "1518 / 940",
    imagens: [
      {
        src: "/projetos/analisador-xadrez-partida.png",
        alt: {
          pt: "Tabuleiro do Analisador de Xadrez com barra de avaliação, importação por PGN ou link e lista de puzzles",
          en: "Chess Analyzer board with evaluation bar, PGN or link import and puzzle list",
        },
      },
      {
        src: "/projetos/analisador-xadrez-dashboard.png",
        alt: {
          pt: "Dashboard do Analisador de Xadrez com metas da semana, conquistas e evolução da precisão",
          en: "Chess Analyzer dashboard with weekly goals, achievements and accuracy over time",
        },
      },
      {
        src: "/projetos/analisador-xadrez-comparar.png",
        alt: {
          pt: "Comparação de duas partidas analisadas lado a lado no Analisador de Xadrez",
          en: "Two analyzed games compared side by side in Chess Analyzer",
        },
      },
    ],
  },
  {
    titulo: { pt: "Chat App", en: "Chat App" },
    descricao: {
      pt: "Chat em tempo real no estilo Discord: as mensagens chegam na hora para todo mundo graças ao Socket.IO, com canal #geral e lista de quem está online. Antes de entrar, cada pessoa monta o perfil escolhendo nome, avatar (emoji ou foto) e cor — e o cadastro fica salvo num banco SQLite, que também impede dois usuários com o mesmo nome.",
      en: "Discord-style real-time chat: messages reach everyone instantly thanks to Socket.IO, with a #general channel and an online users list. Before joining, each person sets up a profile by picking a name, avatar (emoji or photo) and color — and the sign-up is stored in a SQLite database, which also prevents two users from taking the same name.",
    },
    tecnologias: ["HTML", "CSS", "JavaScript", "Socket.IO 4", "SQLite"],
    proporcao: "1276 / 711",
    imagens: [
      {
        src: "/projetos/chat-app.png",
        alt: {
          pt: "Tela de cadastro do Chat App com escolha de nome, avatar e cor do perfil",
          en: "Chat App sign-up screen with name, avatar and profile color selection",
        },
      },
    ],
  },
];
