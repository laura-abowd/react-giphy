import React, { Component } from 'react';
import giphy from 'giphy-api';


import SearchBar from './search_bar.jsx';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY =  process.env.GIPHY_API_KEY;


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gifs: [],
            selectedGifId: "l0HU2sYgCZh3HiKnS"
        };
        this.search("Disney")
    }
    search = (query) => {
        giphy({ apiKey: GIPHY_API_KEY, https: true })
       .search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, result) => {
        this.setState({
            gifs: result.data
        });
    });
}
//selected gif function below
    selectGif = (id) => {
        this.setState({
        selectedGifId: id
        });
    }
    // add render function
    render () {

        return (
            <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
                <div className="right-scene">
                    <GifList gifs= {this.state.gifs}  selectGif={this.selectGif}  />
                </div>
            </div>
        );
    }
}

export default App;