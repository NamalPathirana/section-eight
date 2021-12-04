import styles from "./Button.module.css";

const Button = (props) => {
  return <button className={styles.button} type={props.type || 'button'}>{props.name}</button>;
};

export default Button;
