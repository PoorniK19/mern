import logo from './logo.svg';
import './App.css';

const config = createBrowserRouter([
  {path:"/home",elelment:<Home/>},
{path:"/about",element:<About/>}

]);

function App() {
  return (
    <div className="App">
      <header className="First App">
        <h1><b>hello</b></h1>
        <button>
          Decrement
        </button>
      </header>
    </div>
  );
}

export default App;
