import React from 'react';
import './icon.css';
export default function Icon() {
	return (
		<div>
			<div className="background">
				<div className="topText">
					<span>This is heading</span>
					<p>In two lines</p>
				</div>
				<div className="wrapper">
					<div className="panel pricing-table">
						<div className="features-plan">
							<ul className="features-names">
								<li className="pricing-features-list">Lorem Ipsum 1</li>
								<li className="pricing-features-list">Lorem Ipsum 2</li>
								<li className="pricing-features-list">Lorem Ipsum 3</li>
								<li className="pricing-features-list">Lorem Ipsum 4</li>
								<li className="pricing-features-list">Lorem Ipsum 5</li>
								<li className="pricing-features-list">Lorem Ipsum 6</li>
								<li className="pricing-features-list">Lorem Ipsum 7</li>
								<li className="pricing-features-list">Lorem Ipsum 8</li>
								<li className="pricing-features-list">Lorem Ipsum 9</li>
							</ul>
						</div>

						<div className="pricing-plan">
							<h2 className="pricing-header">Lollipop</h2>
							<ul className="pricing-features">
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
								<li className="pricing-features-item">&#10003;</li>
							</ul>
						</div>

						<div className="pricing-plan">
							<h2 className="pricing-header">Ice candy</h2>
							<ul className="pricing-features">
								<li className="pricing-features-item">&#215;</li>
								<li className="pricing-features-item">&#215;</li>
								<li className="pricing-features-item">&#215;</li>
								<li className="pricing-features-item red">&#215;</li>
								<li className="pricing-features-item red">&#215;</li>
								<li className="pricing-features-item red">&#215;</li>
								<li className="pricing-features-item red">&#215;</li>
								<li className="pricing-features-item">&#215;</li>
								<li className="pricing-features-item">&#215;</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
