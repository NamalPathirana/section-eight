import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = (props) => {

    const listUserItems = props.items.map(row=>{
        return  <UserListItem key={row.key} name={row.name} age={row.age} clicked={()=>{props.deletionHandler()}}/>;
    });

    return(
        <div className={styles.frame}>
           {listUserItems}
        </div>
    );
}

export default UserList;