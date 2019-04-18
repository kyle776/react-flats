import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

// Componenets
import FlatsList from './flats_list.jsx';
import flats from '../../data/flats.js';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats: flats,
      center: {
        lat: flats[0].lat,
        lng: flats[0].lng
      }
    };
  }

 center() {
  return {
    lat: this.state.selectedFlat.lat,
    lng: this.state.selectedFlat.lng
  };
 }

  selectFlat = (index) => {
    this.setState({selectedFlat: flats[index]});
  }

  centerMap = (index) => {
    this.setState({ center: { lat: flats[index].lat,lng: flats[index].lng} })
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatsList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
            centerMap={this.centerMap}
          />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center} defaultZoom={13} center={this.state.center}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
};

export default App;
