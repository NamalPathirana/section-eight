import "./App.css";
import react, {useState} from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const [listOfEntries,SetListOfEntries] = useState([
    { key:0, name: "Dave", age: "000" },
    { key:1, name: "looper", age: "29" },
  ]);

  const UserEntryCallbackHandler = (props) => {
    SetListOfEntries((prevListOfEntries)=>{
      const tempList = [...prevListOfEntries];
      tempList.unshift({key:Math.random(),name:props.name,age:props.age});
      return tempList;
    });
    console.log(listOfEntries);
  }

  const entryDeletionCallback = (entryKey) => {
    const updatedList = [...listOfEntries];
  }

  return (
    <div className="App">
      <section>
        <UserInput onUserEntry={UserEntryCallbackHandler}></UserInput>
      </section>
      <section>
        <UserList items={listOfEntries} deletionHandler={entryDeletionCallback}></UserList>
      </section>
    </div>
  );
}

export default App;
