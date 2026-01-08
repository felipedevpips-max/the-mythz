import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Carrossel from "./components/Carrossel";
import SpotifyPlayer from "./components/Player";

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

        <SpotifyPlayer/>

      </Container>
      
    </>
  );
}

export default App;
