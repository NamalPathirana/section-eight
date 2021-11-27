import styles from './Button.module.css'

const Button = (props) => {
    
    return(
        <div className={styles.button} >
            <button >
               {props.name} 
            </button>
        </div>
    )
}

export default Button;