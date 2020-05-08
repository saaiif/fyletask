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
				<div class="wrapper">
					<div class="panel pricing-table">
						<div class="features-plan">
							<ul class="features-names">
								<li class="pricing-features-item">Lorem Ipsum 1</li>
								<li class="pricing-features-item">Lorem Ipsum 2</li>
								<li class="pricing-features-item">Lorem Ipsum 3</li>
								<li class="pricing-features-item">Lorem Ipsum 4</li>
								<li class="pricing-features-item">Lorem Ipsum 5</li>
								<li class="pricing-features-item">Lorem Ipsum 6</li>
								<li class="pricing-features-item">Lorem Ipsum 7</li>
								<li class="pricing-features-item">Lorem Ipsum 8</li>
								<li class="pricing-features-item">Lorem Ipsum 9</li>
							</ul>
						</div>

						<div class="pricing-plan">
							<h2 class="pricing-header">Lollipop</h2>
							<ul class="pricing-features">
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
								<li class="pricing-features-item">&#10003;</li>
							</ul>
						</div>

						<div class="pricing-plan">
							<h2 class="pricing-header">Ice candy</h2>
							<ul class="pricing-features">
								<li class="pricing-features-item">&#215;</li>
								<li class="pricing-features-item">&#215;</li>
								<li class="pricing-features-item">&#215;</li>
								<li class="pricing-features-item red">&#215;</li>
								<li class="pricing-features-item red">&#215;</li>
								<li class="pricing-features-item red">&#215;</li>
								<li class="pricing-features-item red">&#215;</li>
								<li class="pricing-features-item">&#215;</li>
								<li class="pricing-features-item">&#215;</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
