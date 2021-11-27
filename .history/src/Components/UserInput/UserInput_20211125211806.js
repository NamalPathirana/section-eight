import styles from './UserInput.module.css'

const UserInput = () => {
    return (
        <form>
        <div style={styles.frame}>
            <input placeholder='please enter your name'/>
            <input placeholder='please enter your age'/>
        </div>
        
        </form>
    );
};

export default UserInput;
