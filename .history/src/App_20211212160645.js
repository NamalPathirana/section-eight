import styles from "./App.module.css";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";
import Card from "./UI/Card/Card";
import React from "react";

function App() {
  const [listOfEntries, SetListOfEntries] = useState([
    { key: 0, name: "Dave", age: "000" },
    { key: 1, name: "looper", age: "29" },
  ]);

  const UserEntryCallbackHandler = (props) => {
    SetListOfEntries((prevListOfEntries) => {
      const tempList = [...prevListOfEntries];
      tempList.unshift({
        key: Math.random(),
        name: props.name,
        age: props.age,
      });
      return tempList;
    });
    console.log(listOfEntries);
  };

  const entryDeletionCallback = (entryKey) => {
    SetListOfEntries((perEntry) => {
      const updatedEntries = perEntry.filter((entry) => {
        return entry.key !== entryKey;
      });
      return updatedEntries;
    });
  };

  let UserInfoSegment = <Card><h3 className={styles.block}>No Entries Exists To Display</h3></Card>;

  if (listOfEntries.length > 0) {
    UserInfoSegment = (
      <UserList
        items={listOfEntries}
        deletionHandler={entryDeletionCallback}
      ></UserList>
    );
  }

  return (
    <React.Fragment className="App">
      <section>
        <UserInput onUserEntry={UserEntryCallbackHandler}></UserInput>
      </section>
      <section>
      {UserInfoSegment}
      </section>
    </React.Fragment>
  );
}

export default App;
