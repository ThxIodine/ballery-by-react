import React from 'react';
import ReactDOM from 'react-dom';
import GalleryByReact from './gallery_by_react.jsx';

export default class Index extends React.Component{
	render(){
		return(
			<div>
				<GalleryByReact/>
			</div>
		)
	}
}

ReactDOM.render(
	<Index/>,document.getElementById('mainContainer')
);