import React from 'react';
import icon from '../../water-icon.png';


class InputTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
	return(
		<div>
			<header className="App-header">
	          <img src={icon} className="App-logo" alt="water-icon" />
	          <h1 className="App-title">Upload data site</h1>
	        </header>
	        <p className="App-intro">
	          
	        </p>
	    </div>
		);
}}


export default InputTitle;