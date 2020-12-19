import React from 'react';
import axios from 'axios';
import {
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
	OpenInNew,
} from '@material-ui/icons';

import * as ActionType from '../action';
import { connect } from 'react-redux';

class Sources extends React.Component {
	constructor() {
		super();
		this.state = {
			sources: [],
			open_sources: false,
		};
		this.API_KEY = process.env.REACT_APP_API_KEY;
	}

	componentDidMount() {
		axios
			.get(`https://newsapi.org/v2/sources?apiKey=${this.API_KEY}`)
			.then((res) => {
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
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${this.API_KEY}`
			)
			.then((res) => {
				this.props.set_source_news(res.data);
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
				<OpenInNew
					fontSize='small'
					onClick={() => window.open(source.url)}
				/>
			</ListItem>
		));
		return (
			<List component='nav'>
				<ListItem button>
					<ListItemIcon>
						<Star />
					</ListItemIcon>
					<ListItemText>Favorites</ListItemText>
					<ExpandMore />
				</ListItem>
				<ListItem button onClick={this.handle_sources}>
					<ListItemIcon>
						<AddLocation />
					</ListItemIcon>
					<ListItemText>Sources</ListItemText>
					{open_sources ? <ExpandLess /> : <ExpandMore />}
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

export default connect(null, mapDispatchToProps)(Sources);
