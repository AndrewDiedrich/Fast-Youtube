import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //props is arguement arrive as object, is an array of videos
	const videoItems = props.videos.map((video) => {
		return <VideoListItem 
		onVideoSelect={props.onVideoSelect}
		key ={video.etag} 
		video={video} 
		/> //pass property named video that return videos
	}) //etag found in network api response, just so react can update 

	return ( //must have item key prop with list
		<ul className='col-md-4 list-group'>  
			{videoItems}
		</ul>
		) //will render li's within ul. 
};

export default VideoList;