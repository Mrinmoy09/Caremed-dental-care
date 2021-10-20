import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';

import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/LogIn/LogIn';
import SignUp from './components/Login/SignUp/SignUp';
import Booking from './components/Home/Booking/Booking';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path ='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>
            <SignUp></SignUp>
          </Route>
          <PrivateRoute exact path='/services/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/booking'>
            <Booking></Booking>
          </PrivateRoute>
        <Route exact to="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
