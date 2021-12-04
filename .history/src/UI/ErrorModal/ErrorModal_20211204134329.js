import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";

const ErrorModal = (props) => {
  return (
    <Card>
      <header>{props.title}</header>
      <h2></h2>
      <footer></footer>
    </Card>
  );
};

export default ErrorModal;
