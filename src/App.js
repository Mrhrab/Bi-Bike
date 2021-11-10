import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
