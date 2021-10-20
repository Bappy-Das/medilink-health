import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Shared/Header/Header';
import Home from './component/Home/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import SingleService from './component/Home/Services/SingleService/SingleService';
import Services from './component/Home/Services/Services';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ConfirmAppoinment from './component/Shared/ConfirmAppoinment/ConfirmAppoinment';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Doctors from './component/Home/Doctors/Doctors';
import SingleDoctor from './component/Home/Doctors/SingleDoctor/SingleDoctor';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
// import PrivateRoute from './component/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allservices">
              <Services></Services>
            </Route>
            <Route path="/doctor">
              {/* <Specialist></Specialist> */}
              <Doctors></Doctors>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/book">
              <ConfirmAppoinment></ConfirmAppoinment>
            </PrivateRoute>
            <Route path="/service/:serviceID">
              <SingleService></SingleService>
            </Route>
            <Route path="/doctorinfo/:doctorID">
              <SingleDoctor></SingleDoctor>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
