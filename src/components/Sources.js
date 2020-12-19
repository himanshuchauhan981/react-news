import React from 'react';
import {
	Badge,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {
	Star,
	ExpandMore,
	AddLocation,
	ExpandLess,
	OpenInBrowser,
} from '@material-ui/icons';
import * as ActionType from '../action';
import { connect } from 'react-redux';

import NewsService from '../services/newsApi';

class Sources extends React.Component {
	constructor() {
		super();
		this.state = {
			sources: [],
			open_sources: false,
		};
		this.API_KEY = process.env.REACT_APP_API_KEY;
		this.news_service = new NewsService();
	}

	componentDidMount() {
		this.news_service.get_news_sources().then((res) => {
			let sources = res.data.sources.slice(5, 10);
			let sources_list = sources.map((source) => ({
				id: source.id,
				name: source.name,
				url: source.url,
			}));
			this.setState({ sources: sources_list });
		});
	}

	handle_sources = () => {
		this.setState({
			open_sources: !this.state.open_sources,
		});
	};

	get_news_from_source = (id) => {
		this.news_service.get_news_from_source(id).then((res) => {
			this.props.set_source_news(res.data.articles);
		});
	};

	render() {
		let { sources, open_sources } = this.state;
		let sources_list = sources.map((source) => (
			<ListItem
				button
				className='pl-4'
				key={source.id}
				onClick={() => this.get_news_from_source(source.id)}
			>
				<ListItemText primary={source.name} />
				<OpenInBrowser
					fontSize='small'
					onClick={() => window.open(source.url)}
				/>
			</ListItem>
		));
		return (
			<List component='nav'>
				<ListItem button>
					<ListItemIcon>
						<Star className='icon' />
					</ListItemIcon>
					<ListItemText className='icon-name'>Favorites</ListItemText>
					<Badge
						color='secondary'
						badgeContent={this.props.total_favorites}
						className='badge-margin'
						showZero
					/>
				</ListItem>
				<ListItem button onClick={this.handle_sources}>
					<ListItemIcon>
						<AddLocation className='icon' />
					</ListItemIcon>
					<ListItemText className='icon-name'>Sources</ListItemText>
					{open_sources ? (
						<ExpandLess className='icon' />
					) : (
						<ExpandMore className='icon' />
					)}
				</ListItem>
				<Collapse in={open_sources} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{sources_list}
					</List>
				</Collapse>
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		total_favorites: state.favorites.length,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_source_news: (data) => {
			dispatch({
				type: ActionType.SET_SOURCE_NEWS,
				data: data,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
