import './styles/App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import {useState} from 'react';

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav setData={setData} />
      <Main data={data} />
    </div>
  );
}

export default App;
