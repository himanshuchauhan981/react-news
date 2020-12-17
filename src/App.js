import React from 'react';
import NewsBody from './components/NewsBody';

import NewsHeader from './components/NewsHeader';

function App() {
	return (
		<div className='d-block'>
			<NewsHeader />
			<NewsBody />
		</div>
	);
}

export default App;
