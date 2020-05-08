import React, { useState } from 'react';
import { Switch } from 'antd';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Serving25 from '../Servings/Serving25';
import Serving50 from '../Servings/Serving50';
import Serving100 from '../Servings/Serving100';
import Serving200 from '../Servings/Serving200';
import Serving35 from '../Servings/Serving35';
import Serving55 from '../Servings/Serving55';
import Serving105 from '../Servings/Serving105';
import Serving205 from '../Servings/Serving205';
import 'antd/dist/antd.css';
const display = {
	display: 'flex',
	textAlign: 'center',
	fontSize: '14px',
	padding: '5px'
};

const Toggle = () => {
	const [ toggle, setToggle ] = useState(false);

	const toggler = () => {
		toggle ? setToggle(false) : setToggle(true);
	};

	return (
		<div>
			<div className="display">
				<span>
					<strong>Annual</strong>
					<p>50% off</p>
				</span>{' '}
				<Switch onClick={toggler} />{' '}
				<span>
					<strong>Montly</strong>
				</span>
			</div>
			{toggle ? (
				<div>
					<div className="content">
						<Route exact path="/" component={Serving25} />
						<Route path="/Serving50" component={Serving50} />
						<Route path="/Serving100" component={Serving100} />
						<Route path="/Serving200" component={Serving200} />
					</div>
				</div>
			) : (
				<div className="content">
					<Route exact path="/" component={Serving35} />
					<Route path="/(Serving55|Serving50)/" component={Serving55} />
					<Route path="/(Serving105|Serving100)/" component={Serving105} />
					<Route path="/(Serving205|Serving200)/" component={Serving205} />
				</div>
			)}
		</div>
	);
};
export default Toggle;
