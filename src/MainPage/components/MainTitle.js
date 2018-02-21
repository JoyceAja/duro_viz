import React from 'react';
import icon from '../../water-icon.png';

const MainTitle = () => {
	return(
		<div>
			<header className="App-header">
	          <img src={icon} className="App-logo" alt="water-icon" />
	          <h1 className="App-title">Welcome to DURO environment data site.</h1>
	        </header>
	        <p className="App-intro">
	          To get started, click following <code>buttons</code> .
	        </p>
	    </div>
		);
}


export default MainTitle;