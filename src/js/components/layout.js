import React from "react";

import BoxesContainer from "./boxescontainer"
export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	render() {
		return (
			<BoxesCountainer />
		);
	}

}