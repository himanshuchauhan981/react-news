const initialState = {
	source_news: [],
	particular_news: {},
	favorites: [],
};

const newsReducer = (state = initialState, action) => {
	if (action.type === 'set_source_news') {
		return {
			...state,
			source_news: action.data,
			particular_news: {},
		};
	} else if (action.type === 'set_particular_news') {
		return {
			...state,
			particular_news: action.data,
		};
	} else if (action.type === 'add_news_to_favorites') {
		return {
			...state,
			favorites: [...state.favorites, action.data],
		};
	} else if (action.type === 'remove_news_from_favorites') {
		let updated_favorites = state.favorites.filter(
			(favorite) => favorite.author !== action.author
		);
		return {
			...state,
			favorites: updated_favorites,
		};
	}
	return state;
};

export default newsReducer;
