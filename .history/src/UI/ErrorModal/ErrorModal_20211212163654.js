import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button"
import React from "react";
import reactDom from "react-dom";

const BackDrop = () => {
  return(<div className={styles.backdrop} onClick={props.onConfirm}/>);
}

const Overlay = () => {
  
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
    
    <Card className={styles.modal}>
      <header className={styles.header} ><h2>{props.title}</h2></header>
      <h2 className={styles.message}>{props.message}</h2>
      <footer className={styles.actions}><Button name="Close" onClick={props.onConfirm}></Button></footer>
    </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
