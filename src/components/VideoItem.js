import React from 'react';

class VideoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	handleClick(event) {
		event.preventDefault();
		this.props.onClick(this.props.videoId);
	}

	render() {
		return (
			<a href="/" onClick={this.handleClick.bind(this)}>
				<div className={"row " + (this.props.selected ? "selected" : "")} style={{marginTop: '10px'}}>
					<div className="col-md-3">
						<img src={this.props.src} alt="" />
					</div>
					<div className="col-md-8">
						{this.props.title}
					</div>
				</div>
			 </a>
		);
	}
}

export default VideoItem;