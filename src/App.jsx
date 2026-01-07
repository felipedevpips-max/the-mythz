import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Carrossel from "./components/Carrossel";


function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Carrossel/>
    </Container>
  );
}

export default App;
