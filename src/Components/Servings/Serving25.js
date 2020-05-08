import React, { Component } from 'react';
import './Serving25.css';

const colors = {
	color: '#22A0FC',
	margin: '0'
};


class Serving25 extends Component {
	render() {
		return (
			<div>
				<div>
					<div class="cards">
						<div class="card">
							<h2>lollipop</h2>

							<div className="mainSub">
								<b>$25</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 25 serving</p>
						</div>
						<div class="card">
							<h2>IceCandy</h2>

							<div className="mainSub">
								<b>$50</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 25 serving</p>
						</div>
						<div class="card active">
							<div className="endTitile">
								<h6>Your saving with lollipop</h6>
							</div>

							<div className="mainSub" style={colors}>
								<b>$25</b>
								<small>
									<i>per month</i>
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Serving25;
