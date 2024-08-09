import logo from './logo.svg';
import './App.css';
import Home from './Home';
import{ createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './About';
const router = createBrowserRouter([
    {path: "/home",element:<Home/>},
    {path: "/home",element:<About/>}
]);

function App() {
  const getUser=async()=>{
    let res = await fetch('https://reqres.in/api/users');
    let serverRes = await res.json();
    console.log(serverRes['data'])

  }
  return (
    <div>
      {/RouteProvider config={config}/>/}
      <About/>
      <Home/>
      <button onClick={getUser}>Click to get user </button>
    </div>
  );
}

export default myApp2;