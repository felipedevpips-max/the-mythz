import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Carrossel from "./components/Carrossel";
import SpotifyPlayer from "./components/Player";
import { Videos } from "./components/Videos";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <section id="home">
        <Header />
        </section>

        <Hero />

        <section id="sobre">
        <About />
        </section>

        <section id="integrantes">
        <Carrossel />
        </section>

        <section id="ouviragora">
        <SpotifyPlayer/>
        </section>

        <section id="videos">
          <Videos/>
        </section>

      </Container>
      <section id="contato">
      <Footer/>
      </section>
      
    </>
  );
}

export default App;
