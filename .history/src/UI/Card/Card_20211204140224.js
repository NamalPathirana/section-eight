import styles from './Card.module.css';

const Card = (props) => {

    return (<div className={props.className.length>0?styles.card:props.className}>
        {props.children}
    </div>);

}

export default Card;