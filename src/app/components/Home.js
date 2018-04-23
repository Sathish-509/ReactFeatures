import React from "react";

export class Home extends React.Component {
	render() {
		let content = "";
		if (true) {
			content = <p> Hello! </p>
		}
		return (
			<div>
				<p>In a Home component</p>
				{ 2 + 2 }
				{ content }
				{ 5 == 2 ? "YES" : "NO"}
			</div>
		);
	}
}