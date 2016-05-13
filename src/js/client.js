import React from "react";
import ReactDOM from "react-dom";

require("../css/style.scss");

import Layout from "./components/Layout";

class Hello extends React.Component {
	render() {
		return (
			<h1>Hello World</h1>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Hello />, app);
