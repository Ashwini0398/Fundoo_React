import './App.css';
import Login from './components/login/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './components/registration/Registration';


function App() {
  return (
    <BrowserRouter>
  
    <Switch>  
    <Route exact path="/" component={Login}/>
    <Route exact path="/Registration" component={Registration}/>
    </Switch>
    {/* <Login/> */}
 
    </BrowserRouter>
  );
}

export default App;
