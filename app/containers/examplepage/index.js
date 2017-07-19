import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upAsync, down } from './actions'
import PropTypes from 'prop-types'

class ExamplePage extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h3 className="counter-title">{ this.props.counter }</h3>
        <button onClick={ this.props.up }>+</button>
        <button onClick={ this.props.down }>-</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    up: () => { dispatch(upAsync()) },
    down: () => { dispatch(down()) }
  }
}

ExamplePage.propTypes = {
  counter: PropTypes.number,
  up: PropTypes.func,
  down: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage)