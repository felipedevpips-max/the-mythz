import styles from "./button.module.css";

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
