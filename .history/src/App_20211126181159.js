import "./App.css";
import react, {useSate} from "react";
import UserInput from "./Components/UserInput/UserInput";
import UserList from "./Components/UserList/UserList";

function App() {
  const [listOfEntries,SetListOfEntries] = useSate([
    { key:0, name: "Dave", age: "000" },
    { key:1, name: "looper", age: "29" },
  ]);

  const UserEntryCallbackHandler = (props) => {
    SetListOfEntries((prevState)=>{
      prevState.push(props);
    });
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
