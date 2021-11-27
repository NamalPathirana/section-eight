import styles from './Button.module.css'

const Button = (props) => {
    
    return(
        <div className={styles.button} >
            <button placeholder={props.name}/>
        </div>
    )
}

export default Button;