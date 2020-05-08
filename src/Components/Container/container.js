import React from 'react';
import './container.css';

export default function Container() {
	return (
		<div className="container">
			<div className="leftSection">
				<p className="leftbold">Looking for a</p>
				<p className="leftbold">lollipop alternative?</p>
				<div className="leftcasual">
					<p>Lorem Ipsum is simply text of the printing </p>
					<p>and typesetting industry. LoremI Ipsum has been the</p>
					<p>industry's standard dummy text ever since the 1500s</p>
				</div>

				<div className="btns">
					<button className="primaryBtn">Primary CTA</button>
					<button className="secondaryBtn">Secondary CTA</button>
				</div>
			</div>
			<div className="rightSection">
				<img src={require('../../assets/globe.svg')} />
			</div>
		</div>
	);
}
