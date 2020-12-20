import React from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import NewsList from './NewsList';
import Sources from './Sources';

const NewsBody = (props) => {
	let news_length = Object.keys(props.particular_news).length;
	return (
		<div className='container-fluid h-100'>
			<div className='row h-100'>
				<div className='col-md-2 bg-secondary p-0'>
					<Sources />
				</div>
				<div
					className={`col-md-5 ${
						props.source_news.length !== 0 ? 'bg-grey' : ''
					}`}
				>
					<NewsList />
				</div>
				<div
					className={`col-md-5 pt-4 ${news_length !== 0 ? 'bg-grey' : ''}`}
				>
					{news_length !== 0 ? <NewsItem /> : null}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		particular_news: state.particular_news,
		source_news: state.source_news,
	};
};

export default connect(mapStateToProps)(NewsBody);
