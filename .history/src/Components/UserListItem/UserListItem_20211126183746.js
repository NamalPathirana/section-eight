import styles from './UserListItem.module.css';


const UserListItem = (props) => {

    return(
        <div className={styles.list_item} onClick={props.Clicked}>
            <h3>{props.name} ({props.age} Years Old)</h3>
        </div>
    );
}

export default UserListItem;