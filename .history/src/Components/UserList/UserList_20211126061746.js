import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = () => {

    var userList = 
    [
        {name:'Dave',age:'27'},
        {name:'looper',age:'29'}
    ];

    const listUserItems = userList.map(row=>{
        return  <UserListItem name=/>;
    });

    return(
        <div className={styles.frame}>
           
        </div>
    );
}

export default UserList;