import styles from "./about.module.css";
import sobre from "../../assets/sobre.jpg";

export const About = () => {
  return (
    <>
      <section className={styles.about}>
        <h2>Sobre</h2>
        <div className={styles.div}>
          <img className={styles.img} src={sobre} alt="Foto de Faraó e Sagaz" />
          <p>
            A The Mythz é uma banda de rock alternativo formada em 2014,
            trazendo músicas autorais intensas e versões únicas de clássicos que
            marcam gerações. Com letras que falam sobre sentimentos reais,
            nossos shows misturam energia, emoção e conexão com o público,
            criando uma experiência inesquecivel.
          </p>
        </div>
      </section>
    </>
  );
};
