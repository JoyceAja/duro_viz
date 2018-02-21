import React from 'react';


class MainButtons extends React.Component {
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
		      value="Upload-water-quality"
		      onClick={() => this.props.onRouteChange('upload')}
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


export default MainButtons;