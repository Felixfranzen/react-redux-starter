import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Root extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node
}