import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css';
import react, {useState} from 'react';

const UserInput = (props) => {

    const userEntry=[{name:'lol',age:'25'}];

    const [username,SetUserName] = useState('');
    const [age,SetAge] = useState('');
    
    const NameInputHandler = (props) => {
        SetUserName(props.target.value);
        console.log('[UserInput.js / userName : ]'+username)
    }

    const UserNameValidation = () => {

    }

    const AgeInputHandler = (props) => {
        SetAge(props.target.value);
        console.log('[UserInput.js / userName : ]'+age)
    }

    return (
        <form onSubmit={props.onUserEntry(userEntry)}>
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
