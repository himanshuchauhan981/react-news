import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NewsBody from './components/NewsBody';
import NewsHeader from './components/NewsHeader';

let theme = createMuiTheme({
	overrides: {
		MuiCardHeader: {
			title: {
				fontFamily: 'Roboto Condensed',
				fontWeight: 'bold',
				fontSize: 18,
				letterSpacing: 1,
			},
		},
		MuiTypography: {
			h6: {
				fontFamily: 'Roboto Condensed',
				fontSize: 16,
			},
			body2: {
				fontFamily: 'Rubik',
				fontSize: 15,
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NewsHeader />
			<NewsBody />
		</ThemeProvider>
	);
}

export default App;
