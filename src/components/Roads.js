import React, { Component } from 'react';
import {Link} from 'react-router-dom'
var firebase = require('firebase')

class Roads extends Component {

  constructor(){
    super()
    this.state={
      Data:[]
    }
  }
  
  componentDidMount(){
  var ref =  firebase.firestore().collection('Roads')
  ref.get().then(snapshot => {
  var Data=[]
  snapshot.forEach(data=>{
   console.log(data.data())
  Data.push(data.data())
  })
  this.setState({Data:Data})
  })
  }

  render() {

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">All Roads</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">Map</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>

          </div>
        </nav>
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">All Roads Details</h6>
         
          {this.state.Data.map(road=>
               <div className="media text-muted pt-3">
               <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                 <image xlinkHref="https://png.pngtree.com/svg/20170906/road_311824.png" height={26} width={26} />
               </svg>
               <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                 <strong className="d-block text-gray-dark">{road.roadname}</strong>
                 {road.description}
               </p>
             </div>
            
            )}
           
       
      
          <small className="d-block text-right mt-3">
            <a href="#">All updates</a>
          </small>
        </div>
      </React.Fragment>
    )
  }


}
export default Roads