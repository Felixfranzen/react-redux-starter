import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { up, down } from './actions.js'

class Counter extends Component {

  constructor(props){
    super(props);
    this.loadUp = this.loadUp.bind(this);
    this.state = {}
  }

  loadUp(){
    this.setState({ loading: true });
    this.props.up()
  }

  render(){
    let loader = ''
    if (this.state.loading){
      loader = (<div>LOADING</div>);
    }
    return(
      <div className="counter">
        <h1 className="count">{this.props.count}</h1>
        <button onClick={this.props.down}>-1</button>
        <button onClick={this.loadUp}>+1</button>
        <h5>{this.props.last_action}</h5>
        {loader}
      </div>
    );
  }
}

function mapStateToProps({ counter }){
  return {
    count: counter.count,
    last_action: counter.last_action
  };
}

function mapDispatchToProps(dispatch){
  return {
    up: () => { dispatch(up()) },
    down: () => { dispatch(down()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);