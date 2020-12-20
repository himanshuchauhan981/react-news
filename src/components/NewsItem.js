import { Paper } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';

const NewsItem = (props) => {
	return (
		<Paper>
			<p className='news_headline mb-0 px-3 py-2'>{props.news.title}</p>

			<img
				src={props.news.urlToImage}
				alt={props.news.title}
				className='news_image'
			/>
			<div className='py-2 px-3'>
				<p className='news_content text-justify'>
					{props.news.content === null
						? props.news.description
						: props.news.content}
				</p>
				<Favorite
					color={
						props.favorites.filter(
							(favorite) => favorite.author === props.news.author
						).length !== 0
							? 'primary'
							: 'action'
					}
				/>
			</div>
		</Paper>
	);
};

const mapStateToProps = (state) => {
	return {
		news: state.particular_news,
		favorites: state.favorites,
	};
};

export default connect(mapStateToProps)(NewsItem);
