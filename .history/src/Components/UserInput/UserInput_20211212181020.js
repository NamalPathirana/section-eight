import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";
import { useState , useRef} from "react";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
  const userEntry = { key: 0, name: "lol", age: "25" };

  const userRefName = useRef();
  const userRefAge = useRef();

  const [username, SetUserName] = useState("");
  const [age, SetAge] = useState("");
  const [isValid, SetIsValid] = useState(true);
  const [error, SetError] = useState();

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

    console.log('[UserInput.js]...'+'formSubmitHandler '+userEntry.age);

    if (username.length === 0) {
      SetIsValid(false);
      SetError({
        error: "Invalid User Name ",
        message: "Please enter a valid user name. ",
      });
      return;
    }
    if (+age < 1) {
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

  const errorHandler = () =>{
    SetError(null);
  }

  return (
    <Wrapper>
      {
        error && <ErrorModal
          title= {error.error}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      }
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
              ref={userRefName}
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
              ref={userRefAge}
            />
            <Button name="Add User" type="submit"></Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
