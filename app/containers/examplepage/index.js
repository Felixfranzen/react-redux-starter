import React, { Component } from 'react'
import { connect } from 'react-redux'
import { up, down } from './actions'
import PropTypes from 'prop-types'

console.log(up, down)

class ExamplePage extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <h1>React/Redux starter project</h1>
        <h5>{ this.props.counter }</h5>
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
    up: () => { dispatch(up()) },
    down: () => { dispatch(down()) }
  }
}

ExamplePage.propTypes = {
  counter: PropTypes.number,
  up: PropTypes.func,
  down: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage)