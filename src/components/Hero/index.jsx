import styles from "./hero.module.css";
import banda from "../../assets/banda.png";
import { Button } from "../Buttons";

export const Hero = () => {
  return (
    <>
      <div className={styles.hero} style={{ backgroundImage: `url(${banda})` }}>
        <div className={styles.content}>
          <h2 className={styles.h2}>THE MYTHZ</h2>
          <p className={styles.p}>Single ELA</p>

          <div className={styles.buttons}>
            <Button>Ouvir agora</Button>
            <Button>Shows</Button>
          </div>
        </div>
      </div>
    </>
  );
};
