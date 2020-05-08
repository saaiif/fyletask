import React, { Component } from 'react';

const colors = {
	color: '#22A0FC'
};
const margin = {
	marginBottom: '30px'
};

class Serving200 extends Component {
	render() {
		return (
			<div>
				<div>
					<div class="cards">
						<div class="card">
							<h2>lollipop</h2>
							{/* <h4>Myrtie May</h4> */}
							<div className="mainSub">
								<b>$200</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 200 serving</p>
						</div>
						<div class="card">
							<h2>IceCandy</h2>

							{/* <h4>Laura French</h4> */}
							<div className="mainSub">
								<b>$400</b>
								<small>
									<i>per month</i>
								</small>
							</div>
							<p>For 200 serving</p>
						</div>
						<div class="card active">
							<h6 style={margin}>Your saving with lollipop</h6>

							{/* <h4>Michael Pearson</h4> */}
							<div className="mainSub" style={colors}>
								<b>$200</b>
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

export default Serving200;
