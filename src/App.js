import React from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Data from './Data'

var myLatLng = {lat: 6.915924, lng: 79.864894};

class  App  extends React.Component{
  static defaultProps = {
    center: {
      lat: 6.927079
      ,
      lng: 79.861244
    },
    zoom: 13
  };
  
  renderMarkers(map, maps) {
    Data.map(data=>{
      var infowindow = new maps.InfoWindow({
        content: '<div><strong>' + data.roadname + '</strong><br>' +
         
        data.description + '</div>'
      });
      let marker = new maps.Marker({
        position: data.position,
        animation: maps.Animation.DROP,
        map:map,
        title: data.roadname
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    })
  }

  render(){
    return (
      <div style={{ height: '100vh', width: '100%' }}>
  
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBrNnazhg3iQlhgWfw9gT6FtTKy9pwJpVY" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}

      >
        </GoogleMapReact> 
    </div>
    )
    }
}


    
export default App
