import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  delete: bandName => dispatch({type: 'DELETE_BAND', payload: bandName })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
