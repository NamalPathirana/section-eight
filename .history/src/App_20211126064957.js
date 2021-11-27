import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const userList = [
    { name: "Dave", age: "000" },
    { name: "looper", age: "29" },
  ];

  const UserEntryCallbackHandler = (props) => {
     
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
