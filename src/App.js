import './App.css';
import Login from './Pages/login/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ProtectedRoute} from '../src/services/auth/protectedRoutes';
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';
import ForgetPassword from '../src/components/ForgetPassword/ForgetPassword';
import ResetPassword from '../src/components/ResetPassword/ResetPassword';


function App() {
  return (
    <BrowserRouter>
  
    <Switch>  
    <Route exact path="/" component={Login}/>
    <Route exact path="/Registration" component={Registration}/>
    <ProtectedRoute path={'/dashboard'} component={Dashboard}/>
    <Route path="/ForgetPassword" component={ForgetPassword}></Route>
    <Route path="/resetpassword" component={ResetPassword}></Route>
    {/* <BrowserRouter>
            <ProtectedRoute	path={"/dashboard/notes"} component={Dashboard}/>
            <ProtectedRoute	path={"/dashboard/trash"} component={Trash}/>
            <ProtectedRoute	path={"/dashboard/archive"} component={Archive}/>
    </BrowserRouter> */}
    </Switch>
    {/* <Login/> */}
 
    </BrowserRouter>
  );
}

export default App;
