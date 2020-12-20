import React from 'react';
import {
	AppBar,
	Avatar,
	IconButton,
	TextField,
	Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Autocomplete } from '@material-ui/lab';
import { Fragment } from 'react';
import { connect } from 'react-redux';

import '../App.css';
import country_code_list from '../services/country';
import NewsService from '../services/newsApi';
import * as ActionType from '../action';

const NewsHeader = (props) => {
	let news_service = new NewsService();

	let grouped_countries = country_code_list.map((country) => {
		let first_letter = country.name[0];
		return {
			first_letter: /[0-9]/.test(first_letter) ? '0-9' : first_letter,
			...country,
		};
	});

	let handle_country_change = (new_country) => {
		let country_code = new_country.code;
		news_service.get_news_sources(country_code).then((res) => {
			let sources = res.data.sources;
			let sources_list = sources.map((source) => ({
				id: source.id,
				name: source.name,
				url: source.url,
			}));
			props.set_country_sources(sources_list);
		});
	};

	return (
		<AppBar position='static' className='appbar'>
			<Toolbar>
				<IconButton color='inherit'>
					<MenuIcon />
				</IconButton>
				<h5 className='mt-2 header-title flex-grow-1'>React news</h5>
				<Autocomplete
					id='country_code_list'
					options={grouped_countries.sort(
						(a, b) => -b.first_letter.localeCompare(a.first_letter)
					)}
					value={props.country}
					disableClearable={true}
					groupBy={(option) => option.first_letter}
					getOptionLabel={(option) => option.name}
					onChange={(event, new_value) => handle_country_change(new_value)}
					renderOption={(option) => (
						<Fragment>
							<Avatar
								src={option.icon}
								style={{ width: 20, height: 20, marginRight: 10 }}
							/>
							{option.name}
						</Fragment>
					)}
					renderInput={(params) => (
						<TextField {...params} variant='outlined' label='Country' />
					)}
					size='small'
					style={{ width: 230, paddingBottom: 10 }}
				/>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => {
	return {
		country: state.selected_country,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		set_country_sources: (data) => {
			dispatch({
				type: ActionType.SET_COUNTRY_SOURCES,
				data,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsHeader);
