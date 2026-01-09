import styles from "./hero.module.css";
import banda from "../../assets/banda.jpg";
import { Button } from "../Buttons";



export const Hero = () => {
  return (
    <>
      <div className={styles.hero} style={{ backgroundImage: `url(${banda})` }}>
        <div className={styles.content}>
          <h1 className={styles.h2}>THE MYTHZ</h1>
          <p className={styles.p}>Single ELA</p>

          <div className={styles.buttons}>
            <Button as="a" href="#ouviragora">Ouvir agora</Button>
            <Button as="a" href="#videos">Videos</Button>
          </div>
        </div>
      </div>
    </>
  );
};
