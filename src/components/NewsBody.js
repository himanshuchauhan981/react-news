import React from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import NewsList from './NewsList';
import Sources from './Sources';

const NewsBody = (props) => {
	let news_length = Object.keys(props.news).length;
	return (
		<div className='mt-6'>
			<div className='container-fluid h-100'>
				<div className='row h-100'>
					<div className='col-md-2 bg-secondary p-0'>
						<Sources />
					</div>
					<div className='col-md-5'>
						<NewsList />
					</div>
					<div className='col-md-5'>
						{news_length !== 0 ? <NewsItem /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		news: state.particular_news,
	};
};

export default connect(mapStateToProps)(NewsBody);
