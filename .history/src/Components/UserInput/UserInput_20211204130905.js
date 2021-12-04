import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";
import { useState } from "react";
import Card from "../../UI/Card/Card";

const UserInput = (props) => {
  const userEntry = { key: 0, name: "lol", age: "25" };

  const [username, SetUserName] = useState("");
  const [age, SetAge] = useState("");
  const [isValid, SetIsValid] = useState(true);

  const NameInputHandler = (props) => {
    SetUserName(props.target.value);

    if (props.target.value.length > 0) {
      SetIsValid(true);
    }
    // console.log('[UserInput.js / userName : ]'+username)
  };

  const AgeInputHandler = (props) => {
    SetAge(props.target.value);
    if (props.target.value.length > 0) {
      SetIsValid(true);
    }
    // console.log('[UserInput.js / userName : ]'+age);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    if (username.length === 0) {
      SetIsValid(false);
      return;
    }

    userEntry.key = Math.random();
    userEntry.name = username;
    userEntry.age = age;

    props.onUserEntry(userEntry);

    SetUserName("");
    SetAge("");
  };

  return (
    <Card>
      <form onSubmit={FormSubmitHandler}>
        <div className={styles.frame}>
          <label className={`${!isValid ? styles.inValid : ""}`}>
            Username
          </label>
          <input
            placeholder="Please enter your name"
            type="text"
            onChange={NameInputHandler}
            className={!isValid ? styles.inValid : ""}
            value={username}
          />
          <label className={`${!isValid ? styles.inValid : ""}`}>
            Age (Years)
          </label>
          <input
            placeholder="Please enter your age"
            type="number"
            max="120"
            maxLength="2"
            min="12"
            onChange={AgeInputHandler}
            value={age}
            className={`${!isValid ? styles.inValid : ""}`}
          />
          <Button name="Add User" type="submit"></Button>
        </div>
      </form>
    </Card>
  );
};

export default UserInput;
