import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"

const ErrorModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.modal} >{props.title}</header>
      <h2 className={styles.modal}>{props.message}</h2>
      <footer className={styles.modal}><Button>Close</Button></footer>
    </Card>
  );
};

export default ErrorModal;
