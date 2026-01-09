import styles from "./videos.module.css";

export const Videos = () => {
  return (
    <>
      <h2 className={styles.title}>Videos</h2>
      <div className={styles.videos}>
        <div className={styles.videowrap}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/R54ZwAYKIao?si=tnw3p8tDitvkatet"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            rel="noopener noreferrer"
          ></iframe>
          </div>
          <div className={styles.videowrap}>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ld9Yqa0eZgE?si=Dtbb4bzxc8Ao6H3D"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            rel="noopener noreferrer"
          ></iframe>
        </div>
      </div>
    </>
  );
};
