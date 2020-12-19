import { Paper } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const NewsItem = (props) => {
	return (
		<Paper>
			<p>{props.news.title}</p>

			<img src={props.news.urlToImage} />
			<p>
				{props.news.content === null
					? props.news.description
					: props.news.content}
			</p>
		</Paper>
	);
};

const mapStateToProps = (state) => {
	return {
		news: state.particular_news,
	};
};

export default connect(mapStateToProps)(NewsItem);
