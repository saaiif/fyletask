import React from 'react';
import Container from './Components/Container/container';
import Icon from './Components/IconChart/icon';
import Main from './Components/Main/main';
import Base from './Components/Base/base';
import Reviews from './Components/Reviews/reviews';
import './App.css';

function App() {
	return (
		<div className="App">
			<Container />
			<Icon />
			<Main />
			<Reviews />
			<Base />
		</div>
	);
}

export default App;
