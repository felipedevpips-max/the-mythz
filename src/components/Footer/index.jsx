import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import spotify from "../../assets/spotify.png";
import youtube from "../../assets/youtube.png";
import deezer from "../../assets/deezer.png";
import whatsapp from "../../assets/whatsapp.png";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <hr className={styles.hr} />
        <div className={styles.contain}>
          <div className={styles.contato}>
            <a href="/" onClick={() => window.location.reload()}>
              <img className={styles.img} src={logo} alt="" />
            </a>
            <ul className={styles.ul}>
              <li>
                <a
                  href="https://www.instagram.com/themythzband?igsh=bTJnaWRldDdvYXNw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.logos} src={instagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/album/56AGufNJOmJIZDFdZlikOl?si=DjjZaeILTEOUvDo3xW3oIg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.logos} src={spotify} />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UC6NV8WpVrau10JFTdBiIimA?si=GDpKEj33ACHGY9nx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.logos} src={youtube} />
                </a>
              </li>
              <li>
                <a
                  href="https://link.deezer.com/s/30pgsDzEJ5E5LByz3bl3f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.logos} src={deezer} />
                </a>
              </li>
              <li>
                <a href="https://www.contate.me/5531973351478" target="_blank" rel="noopener noreferrer">
                  <img className={styles.logos} src={whatsapp} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.container}>
            <p className={styles.color}>Website by Felipe Costa</p>
            <p>© 2026 • The MYTHZ</p>

            <nav>
              <a href="#home">Home</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
