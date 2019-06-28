import React, { Component } from 'react';
import './home.css';


class Home extends Component {
    render() {
  
        
        return (

            <React.Fragment>
                  <div className="bg">

                     <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Road Names</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/map">Link</a>
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
      <div style={{margin:"70px"}}>
      <a href="/map" ><button className="btn btn-lg btn-secondary btn-block" type="submit" style={{marginTop: "400px",backgroundColor:"#17a2b8"}}>Roads Near Me</button></a>
      <button className="btn btn-lg btn-secondary btn-block" type="submit" style={{marginTop: "10px",backgroundColor:"#17a2b8"}}>All Roads</button>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Help</button>
      </div>
      </div>
            </React.Fragment>

        )

    }

}

export default (Home)