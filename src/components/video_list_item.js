import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => { //same as const video = props.video;
	//const video = props.video; //child component of video list prop video, so.. props.video
	const imageUrl = video.snippet.thumbnails.default.url;
	return ( //whenever they click on the li --> onClick
		<li onClick={() => onVideoSelect(video)} className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} /> 
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};


export default VideoListItem;