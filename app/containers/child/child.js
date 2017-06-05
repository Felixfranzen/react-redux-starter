import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Child extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="testclassthree">
				This is a message from child!
				<Link to="/1234567890">Lorem ipsum</Link>
			</div>
		);
	}
}