import styles from './UserListItem.module.css';


const UserListItem = (props) => {

    return(
        <div className={styles.list_item}>
            <h3>{props} ({props.age} Years Old)</h3>
        </div>
    );
}

export default UserListItem;