import styles from './Card.module.css';

const Card = (props) => {

    return (<div style={styles.Card}>
        {props.children}
    </div>);

}

export default Card;