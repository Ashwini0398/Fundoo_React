import './App.css';
import Login from './components/login/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
  
    <Switch>  
    <Route exact path="/" component={Login}/>
    <Route exact path="/Registration" component={Registration}/>
    <Route exact path="/Dashboard" component={Dashboard}/>
    </Switch>
    {/* <Login/> */}
 
    </BrowserRouter>
  );
}

export default App;
