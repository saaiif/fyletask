import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
// import Container from './Components/Container/container';
import Toggle from './toggle';
import './main.css';

const spanColor = {
	color: '#00a8ff'
};

class Main extends Component {
	render() {
		return (
			<HashRouter>
				{/* <Container /> */}
				<div>
					<div className="priceHeading">
						<h4>Compare pricing today!</h4>
						<p>
							Lorem Ipsum is dummy text of the printing and{' '}
							<span style={spanColor}>
								<b>typesetting</b>
							</span>
						</p>
					</div>
					<ul className="header">
						<li>
							<NavLink exact to="/">
								25 Serving
							</NavLink>
						</li>
						<li>
							<NavLink to="/Serving50">50 Serving</NavLink>
						</li>
						<li>
							<NavLink to="/Serving100">100 Serving</NavLink>
						</li>
						<li>
							<NavLink to="/Serving200">200 Serving</NavLink>
						</li>
					</ul>
					{/* <div className="content"> */}
					<Toggle />
				</div>
			</HashRouter>
		);
	}
}

export default Main;
