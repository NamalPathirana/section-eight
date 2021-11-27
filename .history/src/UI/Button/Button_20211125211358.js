import styles from './Button.module.css'

const Button = (props) => {
    
    return(
        <div style={styles.button} >
            <button value={props.name}/>
        </div>
    )
}

export default Button;