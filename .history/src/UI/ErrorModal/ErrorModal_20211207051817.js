import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
    <Card className={styles.modal}>
      <header className={styles.header} ><h2>{props.title}</h2></header>
      <h2 className={styles.message}>{props.message}</h2>
      <footer className={styles.actions}><Button name="Close" onClick={props.onConfirm}></Button></footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
