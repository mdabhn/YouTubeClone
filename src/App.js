import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Videos from './components/Videos';
import SelectedVideo from './components/SelectedVideo';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onUserSearch('Music');
  }

  onUserSearch = async (term) => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&key=AIzaSyDytgC4qa-xQ6zDsqBuxr1-D66RJdYqQXY`
    );

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className='ui container'>
        <Search onUserSearch={this.onUserSearch} />

        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <SelectedVideo video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <Videos
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
