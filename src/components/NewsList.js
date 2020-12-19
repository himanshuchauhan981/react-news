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
	Button,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Favorite, Launch, OpenInNewOutlined } from '@material-ui/icons';
import moment from 'moment';
import color from 'randomcolor';

import * as ActionType from '../action';

const NewsList = (props) => {
	let news = props.news_list.map((news, index) => (
		<Card key={index} className='my-4'>
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
			<CardActions>
				<Tooltip
					title='Add to Favorites'
					onClick={() =>
						props.favorites.filter(
							(favorite) => favorite.author === news.author
						).length === 0
							? props.add_news_to_favorites(news)
							: props.remove_news_from_favorites(news.author)
					}
				>
					<IconButton aria-label='add to favorites'>
						<Favorite
							color={
								props.favorites.filter(
									(favorite) => favorite.author === news.author
								).length !== 0
									? 'primary'
									: ''
							}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title='Open'>
					<IconButton
						aria-label='Open'
						onClick={() => props.set_particular_news(news)}
					>
						<Launch />
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
		favorites: state.favorites,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_particular_news: (data) => {
			dispatch({
				type: ActionType.SET_PARTICULAR_NEWS,
				data,
			});
		},
		add_news_to_favorites: (data) => {
			dispatch({
				type: ActionType.ADD_NEWS_TO_FAVORITES,
				data,
			});
		},
		remove_news_from_favorites: (author) => {
			dispatch({
				type: ActionType.REMOVE_NEWS_FROM_FAVORITES,
				author,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
