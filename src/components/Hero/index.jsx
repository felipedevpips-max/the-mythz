import styles from "./hero.module.css";
import banda from "../../assets/banda.jpg";
import { Button } from "../Buttons";

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
      <img
        src={banda}
        alt="Banda The Mythz de Minas Gerais"
        loading="eager"
        fetchpriority="high"
        width="1920"
        height="1080"
        className={styles.heroImage}
      />
        <div className={styles.content}>
          <h1 className={styles.h1}>THE MYTHZ</h1>
          <p className={styles.p}>Single ELA</p>

          <div className={styles.buttons}>
            <Button as="a" href="#ouviragora">
              Ouvir agora
            </Button>
            <Button as="a" href="#videos">
              Videos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
