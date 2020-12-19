import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	CardActions,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Favorite, OpenInNewOutlined } from '@material-ui/icons';

import * as ActionType from '../action';

const NewsList = (props) => {
	let news = props.news_list.map((news, index) => (
		<Card key={index} onClick={() => props.set_particular_news(news)}>
			<CardHeader
				avatar={<Avatar aria-label='news'>R</Avatar>}
				title={news.title}
				subheader={news.publishedAt}
				action={
					<IconButton onClick={() => window.open(news.url)}>
						<OpenInNewOutlined fontSize='small' />
					</IconButton>
				}
			/>
			<CardMedia image={news.urlToImage} className='news_image' />
			<CardContent>
				<p>By {news.author}</p>
				<Typography variant='body2' color='textSecondary' component='p'>
					{news.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Favorite />
				</IconButton>
			</CardActions>
		</Card>
	));
	return news;
};

const mapStateToProps = (state) => {
	return {
		news_list: state.source_news,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_particular_news: (data) => {
			dispatch({
				type: ActionType.SET_PARTICULAR_NEWS,
				data: data,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
