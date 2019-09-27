import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: name => dispatch({ type: "DELETE_BAND", name }) 
}}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
