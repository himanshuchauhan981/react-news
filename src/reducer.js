const initialState = {
	source_news: [],
};

const newsReducer = (state = initialState, action) => {
	if (action.type === 'set_source_news') {
		return {
			...state,
			source_news: action.data,
		};
	}
	return state;
};

export default newsReducer;
