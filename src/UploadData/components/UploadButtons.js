import React from 'react';


class InputButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
	return(
		<div className="mv3">
		  <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" 
		      value="Main-page"
		      onClick={() => this.props.onRouteChange('mainpage')}
		  />
		  <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" 
		      value="Explore-water-quality" 
		      onClick={() => this.props.onRouteChange('explore')}
		  />
		  <input 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" 
		      value="Something-else" 
		      // onClick={}
		  />
		</div>
		);
}}


export default InputButtons;