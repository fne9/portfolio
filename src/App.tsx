import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-fundo">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
