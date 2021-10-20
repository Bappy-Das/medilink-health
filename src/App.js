import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Shared/Header/Header';
import Home from './component/Home/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import SingleService from './component/Home/Services/SingleService/SingleService';
import Services from './component/Home/Services/Services';
import Specialist from './component/Home/Specialist/Specialist';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ConfirmAppoinment from './component/Shared/ConfirmAppoinment/ConfirmAppoinment';
// import PrivateRoute from './component/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div>

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
            <Specialist></Specialist>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/book">
            <ConfirmAppoinment></ConfirmAppoinment>
          </Route>
          <Route path="/service/:serviceID">
            <SingleService></SingleService>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
