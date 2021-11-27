import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css';
import react, {useState} from 'react';

const UserInput = (props) => {

    const userEntry={};

    const [username,SetUserName] = useState('');
    const [age,SetUserName] = useState('');
    
    const NameInputHandler = (props) => {
        SetUserName(props.target.value);
        console.log('[UserInput.js / userName : ]'+username)
    }

    const UserNameValidation = () => {

    }

    const AgeInputHandler = (props) => {
        SetUserName(props.target.value);
        console.log('[UserInput.js / userName : ]'+username)
    }

    return (
        <form onSubmit={props.onUserEntry(userEntry)}>
        <div className={styles.frame}>
            <label>Username</label>
            <input placeholder='Please enter your name' onChange={NameInputHandler}/>
            <label>Age (Years)</label>
            <input placeholder='Please enter your age' onChange={AgeInputHandler}/>
            <Button name='Add User'></Button>
        </div>
        </form>
    );
};

export default UserInput;
