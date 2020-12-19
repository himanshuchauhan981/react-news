const initialState = {
	source_news: [],
	particular_news: {},
};

const newsReducer = (state = initialState, action) => {
	if (action.type === 'set_source_news') {
		return {
			...state,
			source_news: action.data,
		};
	} else if (action.type === 'set_particular_news') {
		return {
			...state,
			particular_news: action.data,
		};
	}
	return state;
};

export default newsReducer;
