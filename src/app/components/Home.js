import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.age,
			status: 0,
			homeLink: "Changed Link"
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

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
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
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">
				Greet
				</button>
				<hr/>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">
				Change Home Link Name
				</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	greet: PropTypes.func
};