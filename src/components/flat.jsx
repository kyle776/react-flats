import React, {Component} from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
    this.props.centerMap(this.props.index);
  }
  render() {

    let styles = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className={`card${this.props.selected ? ' active' : ''}`} style={styles}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>

    );
  }
}

export default Flat;
