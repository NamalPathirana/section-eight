import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  let userList = [
    { name: "Dave", age: "000" },
    { name: "looper", age: "29" },
  ];

  const UserEntryCallbackHandler = (props) => {
    userList.add(props);
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