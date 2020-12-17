import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import React from 'react';
import '../App.css';

const NewsHeader = () => {
	return (
		<AppBar position='fixed'>
			<Toolbar>
				<IconButton color='inherit'>
					<Menu />
				</IconButton>
				<h4 className='mt-2 header-title'>React news</h4>
			</Toolbar>
		</AppBar>
	);
};

export default NewsHeader;
