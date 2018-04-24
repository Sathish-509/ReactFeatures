import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
	constructor(props){
		super();
		console.log("constructor");
		this.state = {
			age: props.age,
			status: 0,
			homeLink: props.initialLink,
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

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		})
	}

	componentWillMount() {
		console.log("component will mount");
	}

	componentDidMount() {
		console.log("component Did mount");
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log("component will receive props ", nextProps);
		//recommending to use getDerivedStateFromProps(nextProps, prevState)
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("should component update ", nextProps, nextState);
		/* if(nextState.status === 1) {
			return false;
		} */ //if we return false from this hook, component update will not happen
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("component will update ", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("component Did update ", prevProps, prevState);
	}

	componentWillUnmount() {
		console.log("component will umnount ");
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
				<input type="text" value={this.state.homeLink}
					onChange={(event) => this.onHandleChange(event)}/>
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