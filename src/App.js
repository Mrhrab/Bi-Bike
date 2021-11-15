import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderNow from './Pages/OrderNow/OrderNow';
import Orders from './Pages/Dashboard/Orders/Orders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/Home/Review/AddReview/AddReview';
import AddAdmin from './Pages/Dashboard/AddAdmin/AddAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Payment from './Pages/Dashboard/Payment/Payment';

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
          <PrivateRoute path="/addReview">
             <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/orderNow/:serviceId">
             <OrderNow></OrderNow>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/payment">
             <Payment></Payment>
          </PrivateRoute>
          <AdminRoute path="/addAdmin">
             <AddAdmin></AddAdmin>
          </AdminRoute>
          <PrivateRoute path="/orders">
             <Orders></Orders>
          </PrivateRoute>
          <AdminRoute path="/addProduct">
             <AddProduct></AddProduct>
          </AdminRoute>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
