import './App.css';
import { Router, Switch} from "react-router-dom"
import Home from './componentes/Home';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Home/>
    </div>
  );
}

export default App;
