import React from 'react';
import './base.css';

export default function Base() {
	return (
		<div className="container">
			<div className="leftSection">
				<p className="bold">Loved by users,</p>
				<p className="bold">recomended by experts</p>
				<div className="casual">
					<p>Lorem Ipsum is simply text of the printing </p>
					<p>and typesetting industry. LoremI Ipsum has been the</p>
					<p>industry's standard dummy text ever since the 1500s</p>
				</div>

				<div className="btns">
					<button className="primaryBtn">Primary CTA</button>
				</div>
			</div>
			<div className="rightSection">
				<img src={require('../../assets/base.png')} />
			</div>
		</div>
	);
}
