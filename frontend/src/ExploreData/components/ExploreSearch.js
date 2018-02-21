import React from 'react';
import './ExploreSearch.css';

class ExploreTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId:'',
      temp:'',
      ph:''
    }
  }

  onIdChange = (event) => {
    this.setState({searchId: event.target.value});
  }

  onExploreData = () => {
    fetch('http://localhost:3000/explore/' + this.state.searchId)
      .then(response => response.json())
      .then(data => this.setState({temp: data.temp}));
    fetch('http://localhost:3000/explore/' + this.state.searchId)
      .then(response => response.json())
      .then(data => this.setState({ph: data.ph}));
      console.log(this.state.temp, this.state.ph);
  }

  render() {
	return(
		<div>
	          <div className="mv3">
                <label className="db fw6 lh-copy f4 white" htmlFor="id">Enter Id: </label>
	                <input
	                  className="b pa2 input-reset ba bg-transparent hover-bg-white hover-pink w-10 h-2 shadow-5"
	                  type="id"
	                  name="id"
	                  id="id"
	                  onChange={this.onIdChange}
	                />
	            </div>
	            <div>
	                <input
	                  onClick={this.onExploreData}
	                  className="form b pa2 input-reset ba b--black bg-transparent grow pointer f6 dib h-2"
	                  type="submit"
	                  value="Explore"
	                />
	          </div>
	          <div className='white f2'>
		        {`TEMP is ${this.state.temp}, PH is ${this.state.ph}.`}
		      </div>
	        <p className="App-intro">

	        </p>
	    </div>
		);
}}


export default ExploreTitle;