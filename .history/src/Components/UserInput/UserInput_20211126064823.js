import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css';
import react, {useState} from 'react';

const UserInput = () => {

    const userEntry={};

    const [username,SetUserName] = useState('');
    
    
    const NameInputHandler = (props) => {
        SetUserName(props.target.value);
        console.log('[UserInput.js : userName : ]'+username)
    }

    return (
        <form onSubmit={onUserEntry()}>
        <div className={styles.frame}>
            <label>Username</label>
            <input placeholder='Please enter your name' onChange={NameInputHandler}/>
            <label>Age (Years)</label>
            <input placeholder='Please enter your age'/>
            <Button name='Add User'></Button>
        </div>
        </form>
    );
};

export default UserInput;
