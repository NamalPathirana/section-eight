import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <section>
      <UserInput></UserInput>
      </section> 
      <section>
      <UserList></UserList>
      </section>   
        
    </div>
  );
}

export default App;
