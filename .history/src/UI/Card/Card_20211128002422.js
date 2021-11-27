import styles from './Card.module.css';

const Card = (props) => {

    return (<div style={styles.card}>
        {props.children}
    </div>);

}

export default Card;