import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = () => {

    var userList = 
    [
        {name:'Dave',age:'27'},
        {name:'looper',age:'29'}
    ];

    const listUserItems = props.items.map(row=>{
        return ();
    });

    return(
        <div className={styles.frame}>
            <UserListItem items={userList}/>
        </div>
    );
}

export default UserList;