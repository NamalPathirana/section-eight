import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = (props) => {

    var userList = 
    [
        {name:'Dave',age:'27'},
        {name:'looper',age:'29'}
    ];

    const listUserItems = props.items.map(row=>{
        return  <UserListItem name={row.name} age={row.age}/>;
    });

    return(
        <div className={styles.frame}>
           {listUserItems}
        </div>
    );
}

export default UserList;