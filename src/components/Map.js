import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom'
import './Map.css'
var firebase = require('firebase')

class  MapG  extends Component{
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


  static defaultProps = {
    center: {
      lat: 6.927079
      ,
      lng: 79.861244
    },
    zoom: 13
  };
  
  renderMarkers(map, maps) {
    this.state.Data.map(data=>{
      var infowindow = new maps.InfoWindow({
        maxWidth: 300,
        content: '<div id = \"infowindow\"><strong>' + data.roadname + '</strong><br>' +
         
        data.description + '</div>'
      });
      let marker = new maps.Marker({
        
        position:{lat: data.position._lat, lng: data.position._long} ,
        animation: maps.Animation.DROP,
        map:map,
        title: data.roadname
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
        marker.setAnimation(maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
      }, 4000)
      });
    })
  }

  render(){
     
    return (
      <div style={{ height: '100vh', width: '100%' }}>
  {this.state.Data.length>0 ?
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBrNnazhg3iQlhgWfw9gT6FtTKy9pwJpVY" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}

      >
        </GoogleMapReact> 
        :
        <div>please wait..........</div>
  }
  <Link to ="/"><button className="btn btn-md btn-primary" >Back</button></Link>
   
    </div>
    )
    }
}

export default MapG