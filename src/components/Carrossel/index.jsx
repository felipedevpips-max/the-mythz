import { useState } from "react";
import styles from "./carrossel.module.css";
import sagaz from "../../assets/sagaz.jpg";
import maicon from "../../assets/maicon.jpg";
import felipe from "../../assets/felipe.jpg";
import jonathan from "../../assets/jonathan.jpg";
import luiz from "../../assets/luiz.jpg";
import instagram from "../../assets/instagram.png";


const pessoas = [
  {
    id: 1,
    nome: "David Luiz 'Sagaz'",
    nascimento: "11/02/1998",
    contato: {
      icon: instagram,
      link: "https://www.instagram.com/sagaz_zz?igsh=MW9ieWRjbm8zMG8zaA==",
    },
    posicao: "Vocal/Violão",
    imagem: sagaz,
  },
  {
    id: 2,
    nome: "Maicon Vinicius 'Faraó'",
    nascimento: "07/10/1998",
    contato: {
      icon: instagram,
      link: "https://www.instagram.com/mvxni.01?igsh=cXJnMTB5NWtvemxp",
    },
    posicao: "Vocal/Teclado",
    imagem: maicon,
  },
  {
    id: 3,
    nome: "Luiz Junior",
    nascimento: "12/09/2000",
    contato: {
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    posicao: "Baixo",
    imagem: luiz,
  },
  {
    id: 3,
    nome: "Jonathan Luiz",
    nascimento: "02/07/1994",
    contato: {
      icon: instagram,
      link: "https://www.instagram.com/jonatthan35?igsh=MWpxNmI4bmM5cjdp",
    },
    posicao: "Bateria,Cajon",
    imagem: jonathan,
  },
  {
    id: 3,
    nome: "Felipe Costa",
    nascimento: "30/12/2000",
    contato: {
      icon: instagram,
      link: "https://www.instagram.com/felipe.costa_216?utm_source=qr&igsh=MWl2Z29xM3pjajdneA==" ,
    },
    posicao: "Desenvolvedor Web/ Guitarra",
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
              <h3 className={styles.title}>{pessoa.nome}</h3>
              <p>
                <strong>Data de nascimento :</strong> {pessoa.nascimento}
              </p>
              <p>
                <strong>Posição:</strong> {pessoa.posicao}
              </p>
              <p>
                <strong>Contato:</strong>
                <a
                  href={pessoa.contato.link}
                  target="_blank"
                  rel="noreferrer"
                ><img
                  src={pessoa.contato.icon}
                  alt="Contato"
                  loading="lazy"
                  className={styles.icon}
                /></a>
                
              </p>
            </div>
          </div>

          <button onClick={proximo}>▶</button>
        </div>
      </section>
    </>
  );
}
