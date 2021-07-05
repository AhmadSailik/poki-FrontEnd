import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Faviourit from './Component/Faviourit';
class App extends React.Component{

  render(){
    return(
      <>
<Router>
<Header/>
  <Switch>
    <Route exact path='/'><Home/></Route>
    <Route path='/Faviourit'><Faviourit/></Route>
  </Switch>
</Router>
      </>
    )
  }
}
export default App;