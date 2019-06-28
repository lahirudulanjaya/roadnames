import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import MapG from './components/Map'



class  App  extends React.Component{
 
  

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      
      <Switch>
      
      <Route exact path='/' component = {Home} />
      <Route exact path='/map' component = {MapG} />

      </Switch>
      </div>
      </BrowserRouter>
    )
    }
}


    
export default App
