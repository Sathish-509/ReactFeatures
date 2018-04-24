import React from "react";
import {render} from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	onGreet(){
		alert('Hello!!');
	}
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink="Home"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Sathish"} age={30} greet={this.onGreet}>
							<p>This is paragraph </p>
						</Home>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, document.getElementById("app"));