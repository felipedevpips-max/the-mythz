import { useState } from "react";
import styles from "./carrossel.module.css";
import sagaz from "../../assets/sagaz.jpg";
import maicon from "../../assets/maicon.jpg";


const pessoas = [
  {
    id: 1,
    nome: "David/Sagaz",
    nascimento: "10/05/1990",
    contato: "joao@email.com",
    posicao:"",
    imagem: sagaz
  },
  {
    id: 2,
    nome: "Maicon Vinicius/Faráo",
    nascimento: "22/08/1995",
    contato: "maria@email.com",
    posicao:"",
    imagem: maicon
  },
  {
    id: 3,
    nome: "Carlos Lima",
    nascimento: "01/12/1988",
    contato: "carlos@email.com",
    posicao:"",
    imagem: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    nome: "Carlos Lima",
    nascimento: "01/12/1988",
    contato: "carlos@email.com",
    posicao:"",
    imagem: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    nome: "Felipe Costa",
    nascimento: "01/12/1988",
    contato: "carlos@email.com",
    posicao:"Desenvolvedor Web/ Guitarrista",
    imagem: "https://via.placeholder.com/200"
  },
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? pessoas.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndex((prev) => (prev === pessoas.length - 1 ? 0 : prev + 1));
  };

  const pessoa = pessoas[index];

  return (
    <>
    <section className={styles.integrants}>
    <h2>Integrantes</h2>
    <div className={styles.carrossel}>
      <button onClick={anterior}>◀</button>

      <div className={styles.card}>
        <img src={pessoa.imagem} alt={pessoa.nome} />

        <div className={styles.info}>
          <h2>{pessoa.nome}</h2>
          <p><strong>Data de nascimento:</strong> {pessoa.nascimento}</p>
          <p><strong>Posição:</strong> {pessoa.posicao}</p>
          <p><strong>Contato:</strong> {pessoa.contato}</p>
        </div>
      </div>

      <button onClick={proximo}>▶</button>
    </div>
    </section>
    </>
  );
}
