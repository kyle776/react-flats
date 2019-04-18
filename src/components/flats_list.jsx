import React, {Component} from 'react';

// Import the Flat component
import Flat from './flat.jsx'

class FlatsList extends Component {
  render() {
    return (
      this.props.flats.map((flat, index) => {
        return (
          <Flat
            flat={flat}
            key={flat.lat}
            selected={flat.name === this.props.selectedFlat.name}
            index={index}
            selectFlat={this.props.selectFlat}
            centerMap={this.props.centerMap}
          />)
      })
    );
  }
};


export default FlatsList;
