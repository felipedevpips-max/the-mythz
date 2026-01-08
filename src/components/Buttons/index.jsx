import styles from "./button.module.css";

export const Button = ({
  as: Component = "button",
  children,
  type = "button",
  ...props
}) => {
  return (
    <Component
      className={styles.button}
      {...(Component === "button" ? { type } : {})}
      {...props}
    >
      {children}
    </Component>
  );
};
