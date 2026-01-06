import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
    </Container>
  );
}

export default App;
