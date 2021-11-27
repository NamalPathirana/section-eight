import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css'

const UserInput = () => {
    return (
        <form>
        <div className={styles.frame}>
            <input placeholder='please enter your name'/>
            <input placeholder='please enter your age'/>
            <Button name='Add User'></Button>
        </div>
        </form>
    );
};

export default UserInput;
