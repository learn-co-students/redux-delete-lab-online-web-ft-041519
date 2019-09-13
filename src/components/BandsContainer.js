import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bands from './Bands'
import BandInput from './BandInput';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <label>Add Band</label>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
