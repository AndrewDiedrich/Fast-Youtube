import _ from 'lodash';
import React, { Component } from 'react'; //giving access to the react library as a dependency
import ReactDOM from 'react-dom'; //seperate library for DOM, to render to DOM
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar'; //give file reference of created files, dont have to for libraries


const API_KEY = 'AIzaSyA2p7k6ubA2Xds-03PT5T1peGAXPTA7xd8';
//****create a new component. Should produce html, 
//npm install --save youtube-api-search //saves in package dependencies



//refactor to class component to track state of api
class App extends Component {
	constructor(props) { 
		super(props); //
		this.state = {
			videos: [], //array of videos
			selectedVideo: null
		}; //imidiately kicks off search
		
		this.videoSearch('surfboards')
	}
	//pass callback method to earchbar and make new YTSearch, to set new state of videos
	//refactored youtube search into own method, takes single string, based down to search bar,
	//search bar will call
	videoSearch(term) {
			YTSearch({ key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos [0]
			}); //moved search within constructor
		}); //if key and value is same string then can condense videos same as videos: videos
	}

	render() { //props in class component are available in any method we define as this.props 
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
			//func now renders every 300 milisecs throttles the search.
		return ( //components are child fo App, //passing videos as prop, props arrive to VideoList func as arguement
				//props videos is passed to VideoList func as argument
			<div> 
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
					videos={this.state.videos} />  
			</div>
		);
	}
}

//***App is a type of component, its a class not a instances, must instantiate component***
//arrow func preferable for react 
//App as a functional component can render class components
/*const App = () => { //never changing with const
	return ( 
		<div>
			<SearchBar /> 
		</div> //JSX: subset of JS that allows html within
	);
} */
//JSX cannot be understood by browser, it's what puts html into DOM



//****take this component's generated html and put it on the page
//put on DOM

//App : this is a class
//<App /> : this is an instance, instantiated

ReactDOM.render(<App />, document.querySelector('.container')); //need to pass as instance not a class
//insert instantiated html into reference of root container in html file. index.html

//all files are silo'd and seperate from every componenet, 
//must explicity declare connection