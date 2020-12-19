import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	CardActions,
	Typography,
	Tooltip,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Favorite, OpenInNewOutlined } from '@material-ui/icons';
import moment from 'moment';
import color from 'randomcolor';

import * as ActionType from '../action';

let addNewsToFavorites = () => {};

const NewsList = (props) => {
	let news = props.news_list.map((news, index) => (
		<Card
			key={index}
			onClick={() => props.set_particular_news(news)}
			className='my-4'
		>
			<CardHeader
				avatar={
					<Avatar style={{ backgroundColor: color() }} aria-label='news'>
						{news.source.name.slice(0, 1)}
					</Avatar>
				}
				title={news.title}
				subheader={moment(news.publishedAt).format('MMMM Do, YYYY')}
				action={
					<Tooltip title='Open link'>
						<IconButton onClick={() => window.open(news.url)}>
							<OpenInNewOutlined fontSize='small' />
						</IconButton>
					</Tooltip>
				}
			/>
			<CardMedia image={news.urlToImage} className='news_image' />
			<CardContent>
				<Typography variant='body2' component='p'>
					By <strong>{news.author}</strong>
				</Typography>
				<Typography variant='h6' color='textPrimary' component='p'>
					{news.description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Tooltip
					title='Add to Favorites'
					onClick={() => addNewsToFavorites()}
				>
					<IconButton aria-label='add to favorites'>
						<Favorite />
					</IconButton>
				</Tooltip>
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
