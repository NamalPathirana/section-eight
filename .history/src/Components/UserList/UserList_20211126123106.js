import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'


const UserList = (props) => {

    const listUserItems = props.items.map(row=>{
        return  <UserListItem key={Math.round()} name={row.name} age={row.age}/>;
    });

    return(
        <div className={styles.frame}>
           {listUserItems}
        </div>
    );
}

export default UserList;