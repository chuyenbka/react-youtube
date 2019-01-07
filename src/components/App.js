import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoItem from './VideoItem';
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			selectedVideo: ''
		};
	}

	onSubmit = async (term) => {
		try {
			const data = await axios.get('https://www.googleapis.com/youtube/v3/search', {
				params: {
					q: term,
					part: 'snippet',
					key: '', //insert your key here
					salt: Date.now()
				}
			});
			if (data.data.items[0]) {
				this.setState({
					items: data.data.items,
					selectedVideo: data.data.items[0].id.videoId
				})
			}
		} catch(err) {

		}
	}

	onClick(id){
		this.setState({
			selectedVideo: id
		});
	}

	render() {
		const videoList = this.state.items.map((item, index) => {
			return <VideoItem selected={item.id.videoId === this.state.selectedVideo} src={item.snippet.thumbnails.default.url} title={item.snippet.title} videoId={item.id.videoId} onClick={this.onClick.bind(this)} key={index} />
		});
		return (
			<div className="container">
				<SearchBar onSubmit = {this.onSubmit.bind(this)}/>
				<div className="row">
					<div className="col-md-5">
						{this.state.selectedVideo ? <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${this.state.selectedVideo}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="123"></iframe> : ''}
					</div>
					<div className="col-md-6 col-md-offset-1">
						{videoList}
					</div>
				</div>
			</div>
		);
	}
}

export default App;