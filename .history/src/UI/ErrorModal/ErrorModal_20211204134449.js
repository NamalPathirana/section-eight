import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"

const ErrorModal = (props) => {
  return (
    <Card>
      <header>{props.title}</header>
      <h2>{props.message}</h2>
      <footer><Button></Button></footer>
    </Card>
  );
};

export default ErrorModal;
