import { useReveal } from "../hooks/use-reveal";
import { Header } from "../components/site/header";
import { Hero } from "../components/site/hero";
import { About } from "../components/site/about";
import { Services } from "../components/site/services";
import { Reviews } from "../components/site/reviews";
import { Contact } from "../components/site/contact";
import { Faq } from "../components/site/faq";
import { Footer } from "../components/site/footer";
import { MobileBar } from "../components/site/mobile-bar";

function Index() {
  useReveal();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[color:var(--paper)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

export default Index;
