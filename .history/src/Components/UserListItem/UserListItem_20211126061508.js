import styles from './UserListItem.module.css';


const UserListItem = (props) => {

    listUserItems = props.items.map(row=>{
        return   <h3>{row.name} ({row.age} Years Old)</h3>
    });

    return(
        <div className={styles.list_item}>
        </div>
    );
}

export default UserListItem;