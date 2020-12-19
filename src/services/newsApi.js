import axios from 'axios';

class NewsService {
	constructor() {
		this.BASE_URL = 'https://newsapi.org/v2';
		this.API_KEY = process.env.REACT_APP_API_KEY;
	}

	get_news_sources = () => {
		return axios({
			method: 'get',
			url: `${this.BASE_URL}/sources?apiKey=${this.API_KEY}`,
		});
	};

	get_news_from_source = (id) => {
		return axios({
			method: 'get',
			url: `${this.BASE_URL}/top-headlines?sources=${id}&apiKey=${this.API_KEY}`,
		});
	};
}

export default NewsService;
