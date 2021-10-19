import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Shared/Header/Header';
import Home from './component/Home/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import SingleService from './component/Home/Services/SingleService/SingleService';
import AllService from './component/Home/AllService/AllService';
import Services from './component/Home/Services/Services';
import Specialist from './component/Home/Specialist/Specialist';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* <Home></Home> */}
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
