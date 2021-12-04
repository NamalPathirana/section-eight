import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"

const ErrorModal = (props) => {
  return (
    <div>
    <Card className={styles.modal}>
      <header className={styles.header} ><h2>{props.title}</h2></header>
      <h2 className={styles.message}>{props.message}</h2>
      <footer className={styles.actions}><Button name="Close"></Button></footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
