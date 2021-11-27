import styles from './UserList.module.css';
import UserListItem from '../UserListItem/UserListItem'
import Card from '../../UI/Card/Card';


const UserList = (props) => {

    const listUserItems = props.items.map(row=>{
        return  <UserListItem key={row.key} name={row.name} age={row.age} clicked={()=>{props.deletionHandler(row.key)}}/>;
    });

    return(
        <Card>
        <div className={styles.frame}>
           {listUserItems}
        </div>
        <Card></Card>
    );
}

export default UserList;