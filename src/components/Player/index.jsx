import styles from "./player.module.css";



export function SpotifyPlayer() {
  return (
    <>
    <div>
        <h2 className={styles.title}>Ouça Agora</h2>
    </div>
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/track/130yUwHGtj5bKBZ0sJCoI7?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    
    </>
  );
}


export default SpotifyPlayer;