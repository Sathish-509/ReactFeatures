import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
	constructor(props){
		super();
		this.age = props.age;
	}
	onMakeOlder() {
		this.age += 3;
		console.log("age :"+this.age);
	}
	render() {
		return (
			<div>
				<p>In a Home component</p>
				<p> Your name is {this.props.name}, 
					Your age is {this.props.age}</p>
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">
				Make an Older!
				</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number
};