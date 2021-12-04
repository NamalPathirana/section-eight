import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"

const ErrorModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header} >{props.title}</header>
      <h2 className={styles.message}>{props.message}</h2>
      <footer className={styles.footer}><Button>Close</Button></footer>
    </Card>
  );
};

export default ErrorModal;
