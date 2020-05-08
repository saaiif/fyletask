import React, { Component } from 'react';
import './reviews.css';
const authorName = {
	fontWeight: '700',
	fontSize: '20px',
	marginTop: '20px'
};
const tagName = {
	paddingTop: '5px',
	fontSize: '21px',
	opacity: '0.8',
	lineHeight: '0.002px'
};

export default class Reviews extends Component {
	render() {
		return (
			<div>
				<div className="rSection">
					<img src={require('../../assets/second.jpg')} />
					<blockquote className="blockquote_quoted">
						<p className="blockquote__text">Lorem ipsum dolor sit amet tempor,</p>
						<p className="blockquote__text"> consectetur adipiscing elit, sed do eiusmod </p>{' '}
						<p className="blockquote__text">incididunt ut labore et dolore magna aliqua.</p>
						<p className="blockquote__text"> Ut enim ad minim veniam, quis tempor</p>
						<p className=" blockquote__text__credit" style={authorName}>
							Lyndia Ross
						</p>
						<p style={tagName}>
							<small>Tip World</small>
						</p>
					</blockquote>
				</div>
			</div>
		);
	}
}
