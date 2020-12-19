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

class Sources extends React.Component {
	constructor() {
		super();
		this.state = {
			sources: [],
			open_sources: false,
		};
	}

	componentDidMount() {
		axios
			.get(
				'https://newsapi.org/v2/sources?apiKey=d3e7f873a13948c283ec916cd261e273'
			)
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

	render() {
		let { sources, open_sources } = this.state;
		let sources_list = sources.map((source) => (
			<ListItem button className='pl-4' key={source.id}>
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

export default Sources;
