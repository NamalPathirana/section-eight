import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem.js'


const UserList = () => {

    return(
        <div className={styles.frame}>
            <UserListItem></UserListItem>
        </div>
    );
}

export default UserList;