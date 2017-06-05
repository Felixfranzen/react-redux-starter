import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Test extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: this.props.params.id
		}
	}

	onClick(e){
		this.setState({id: 1234})
	}

	render(){
		return (
			<div>
				this is the test classes text!
				<h1>{this.state.id}</h1>
				<button onClick={this.onClick.bind(this)}>Click me</button>
			</div>
		);
	}
}



