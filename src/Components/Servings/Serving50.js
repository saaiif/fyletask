import React, { Component } from 'react';
// import '../index.css';
import './Serving25.css';
const margin = {
	marginBottom: '30px'
};
const colors = {
	color: '#22A0FC'
};

class Serving50 extends Component {
	render() {
		return (
			<div>
				<div>
					<div class="cards">
						<div class="card">
							<h2>lollipop</h2>
							{/* <h4>Myrtie May</h4> */}
							<div className="mainSub">
								<b>$50</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 50 serving</p>
						</div>
						<div class="card">
							<h2>IceCandy</h2>

							{/* <h4>Laura French</h4> */}
							<div className="mainSub">
								<b>$100</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 50 serving</p>
						</div>
						<div class="card active">
							<h6 style={margin}>Your saving with lollipop</h6>
							{/* <h4>Michael Pearson</h4> */}
							<div className="mainSub" style={colors}>
								<b>$50</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							{/* <p>For 100 serving</p> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Serving50;
