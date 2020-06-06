//existed
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layouts';  //new
import { BrowserRouter } from 'react-router-dom';  //new


class AppContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		);
	}
}

export default App;
