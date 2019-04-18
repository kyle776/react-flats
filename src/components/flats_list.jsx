import React, {Component} from 'react';

// Import the Flat component
import Flat from './flat.jsx'
import flats from '../../data/flats.js'

// ToDo: Import the Flats data

class FlatsList extends Component {
  render() {
    return (
      flats.map((flat) => {
        return (<Flat flat={flat} key={flat.lat}/>)
        // return (<Flat name={flat.name} url={flat.imageUrl} key={flat.lat}/>)
      })
    );
  }
};


export default FlatsList;
