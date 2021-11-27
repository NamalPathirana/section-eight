import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const [listOfEntries,SetListOfEntries] = [
    { key:0,name: "Dave", age: "000" },
    { key:1,name: "looper", age: "29" },
  ];

  const UserEntryCallbackHandler = (props) => {
    userList.push(props);
    console.log(userList);
  }

  return (
    <div className="App">
      <section>
        <UserInput onUserEntry={UserEntryCallbackHandler}></UserInput>
      </section>
      <section>
        <UserList items={userList}></UserList>
      </section>
    </div>
  );
}

export default App;
