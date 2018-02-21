import React, { Component } from 'react';
import './App.css';
import MainTitle from './MainPage/components/MainTitle.js';
import MainButtons from './MainPage/components/MainButtons.js';
import UploadTitle from './UploadData/components/UploadTitle.js';
import UploadButtons from './UploadData/components/UploadButtons.js';
import ExploreTitle from './ExploreData/components/ExploreTitle.js';
import ExploreButtons from './ExploreData/components/ExploreButtons.js';
import ExploreSearch from './ExploreData/components/ExploreSearch.js';
import ExploreGoogleMap from './ExploreData/components/ExploreGoogleMap.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'mainpage'
      }
    }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  componentDidMount() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
      { this.state.route === 'mainpage' 
        ? <div>
            <MainTitle />
            <MainButtons onRouteChange={this.onRouteChange}/>
          </div>
        : ( this.state.route === 'upload'
          ? <div> 
              <UploadTitle />
              <UploadButtons onRouteChange={this.onRouteChange}/>
            </div>
          : <div>
              <ExploreTitle />
              <ExploreSearch />
              <ExploreGoogleMap />
              <ExploreButtons onRouteChange={this.onRouteChange}/>
            </div>
          ) 
      }</div>
    );
  }
}

export default App;
