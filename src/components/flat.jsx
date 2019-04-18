import React, {Component} from 'react';

class Flat extends Component {
  // handleClick = () => {
  // }
  render() {

    let styles = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="card" style={styles}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>

    );
  }
}


export default Flat;

// Flats props ----------
// name: "Charm at the Steps of the Sacre Coeur/Montmartre",
// imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
// price: 164,
// priceCurrency: "EUR",
// lat: 48.884211,
// lng: 2.34689

//<h4>{this.props.name}</h4>

// style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);"
