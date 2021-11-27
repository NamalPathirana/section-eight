import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = () => {

    var userList = 
    [
        {name:'Dave',age:'27'},
        {name:'looper',age:'29'}
    ];

    return(
        <div className={styles.frame}>
            <UserListItem name={'lol'} age={'28'}/>
        </div>
    );
}

export default UserList;