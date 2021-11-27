import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css'

const UserInput = () => {
    return (
        <form onSubmit={userEntryCallback}>
        <div className={styles.frame}>
            <label>Username</label>
            <input placeholder='Please enter your name'/>
            <label>Age (Years)</label>
            <input placeholder='Please enter your age'/>
            <Button name='Add User'></Button>
        </div>
        </form>
    );
};

export default UserInput;
