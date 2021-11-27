import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css';
import {useState} from 'react';

const UserInput = (props) => {

    const userEntry={key:Math.random(),name:'lol',age:'25'};

    const [username,SetUserName] = useState('');
    const [age,SetAge] = useState('');
    
    const NameInputHandler = (props) => {
        SetUserName(props.target.value);
        console.log('[UserInput.js / userName : ]'+username)
        userEntry.name=username;
    }

    const UserNameValidation = () => {

    }

    const AgeInputHandler = (props) => {
        SetAge(props.target.value);
        console.log('[UserInput.js / userName : ]'+age);
        userEntry.age=age;
    }

    const FormSubmitHandler = (event) => {
        event.preventDefault();

        userEntry.key=Math.random();
        props.onUserEntry(userEntry);
    }

    return (
        <form onSubmit={FormSubmitHandler}>
        <div className={styles.frame}>
            <label>Username</label>
            <input placeholder='Please enter your name' onChange={NameInputHandler}/>
            <label>Age (Years)</label>
            <input placeholder='Please enter your age' onChange={AgeInputHandler}/>
            <Button name='Add User' type="submit"></Button>
        </div>
        </form>
    );
};

export default UserInput;
