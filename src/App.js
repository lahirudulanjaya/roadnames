import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import MapG from './components/Map'
import Roads from './components/Roads';



class  App  extends React.Component{
 
  

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      
      <Switch>
      
      <Route exact path='/' component = {Home} />
      <Route exact path='/map' component = {MapG} />
      <Route exact path='/roads' component = {Roads} />


      </Switch>
      </div>
      </BrowserRouter>
    )
    }
}


    
export default App
