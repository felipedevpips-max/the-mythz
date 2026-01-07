import { useState } from "react";
import styles from "./carrossel.module.css";
import sagaz from "../../assets/sagaz.jpg";
import maicon from "../../assets/maicon.jpg";
import felipe from "../../assets/felipe.jpg";
import jonathan from "../../assets/jonathan.jpg";
import luiz from "../../assets/luiz.jpg";
import instagram from "../../assets/instagram.svg";




const pessoas = [
  {
    id: 1,
    nome: "David Luiz 'Sagaz'",
    nascimento: "11/02/1998",
    contato: instagram,
    posicao: "Vocalista/Violão",
    imagem: sagaz,
  },
  {
    id: 2,
    nome: "Maicon Vinicius 'Faráo'",
    nascimento: "07/10/1998",
    contato: instagram,
    posicao: "Vocalista/Tecladista",
    imagem: maicon,
  },
  {
    id: 3,
    nome: "Luiz Junior",
    nascimento: "12/09/2000",
    contato: instagram,
    posicao: "",
    imagem: luiz,
  },
  {
    id: 3,
    nome: "Jonathan Luiz",
    nascimento: "02/07/1994",
    contato: instagram,
    posicao: "",
    imagem: jonathan,
  },
  {
    id: 3,
    nome: "Felipe Costa",
    nascimento: "30/12/2000",
    contato: instagram,
    posicao: "Desenvolvedor Web/ Guitarrista",
    imagem: felipe,
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
              <p>
                <strong>Data de nascimento:</strong> {pessoa.nascimento}
              </p>
              <p>
                <strong>Posição:</strong> {pessoa.posicao}
              </p>
              <p>
                <strong>Contato:</strong> 
                <img src={pessoa.contato}
                alt="Contato"
                className={styles.icon}/>
                
              </p>
            </div>
          </div>

          <button onClick={proximo}>▶</button>
        </div>
      </section>
    </>
  );
}
