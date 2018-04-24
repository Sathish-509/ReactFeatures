import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.age,
			status: 0
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 3000);
	}
	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}
	render() {
		return (
			<div>
				<p>In a Home component</p>
				<p> Your name is {this.props.name}, 
					Your age is {this.state.age}</p>
				<p>Status : {this.state.status}</p>
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