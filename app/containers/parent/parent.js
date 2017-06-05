import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Parent extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}



