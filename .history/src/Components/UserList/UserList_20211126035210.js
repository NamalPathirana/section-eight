import styles from './UserList.module.css';


const UserList = () => {

    return(
        <div className={styles.frame}>
            <UserListItem/>
        </div>
    );
}

export default UserList;