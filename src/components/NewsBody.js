import React from 'react';
import NewsList from './NewsList';
import Sources from './Sources';

const NewsBody = () => {
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
					<div className='col-md-5'></div>
				</div>
			</div>
		</div>
	);
};

export default NewsBody;
