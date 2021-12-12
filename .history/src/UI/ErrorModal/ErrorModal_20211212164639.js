import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import React from "react";
import reactDom from "react-dom";
import react from "react";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <h2 className={styles.message}>{props.message}</h2>
      <footer className={styles.actions}>
        <Button name="Close" onClick={props.onConfirm}></Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <ModalOverlay 
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
        />,
        document.getElementById("backdrop-root"")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
