import styles from './UserListItem.module.css';


const UserListItem = (props) => {

    const listUserItems = props.items.map(row=>{
        return   <h3>{row.name} ({row.age} Years Old)</h3>
    });

    return(
        <div className={styles.list_item}>
            {listUserItems}
        </div>
    );
}

export default UserListItem;