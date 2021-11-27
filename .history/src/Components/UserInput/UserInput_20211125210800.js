import styles from './UserInput.module.css'

const UserInput = () => {
    return (
        <div style={styles.frame}>
            <input placeholder='please enter your name'/>

        </div>
    );
};

export default UserInput;
