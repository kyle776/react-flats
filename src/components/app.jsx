import React, {Component} from 'react';

// Componenets
import FlatsList from './flats_list.jsx'

class App extends Component {
  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatsList />
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
};

export default App;
