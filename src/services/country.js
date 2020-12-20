let country_list = [
	{
		code: 'ae',
		name: 'United Arab Emirates',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
	},
	{
		code: 'ar',
		name: 'Argentina',
		icon:
			'https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg',
	},
	{
		code: 'at',
		name: 'Austria',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png',
	},
	{
		code: 'au',
		name: 'Australia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png',
	},
	{
		code: 'be',
		name: 'Belgium',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
	},
	{
		code: 'bg',
		name: 'Bulgaria',
		icon:
			'https://i.pinimg.com/originals/07/64/ca/0764ca465c71b1585877f9a2ea71cf95.jpg',
	},
	{
		code: 'br',
		name: 'Brazil',
		icon:
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png',
	},
	{
		code: 'ca',
		name: 'Canada',
		icon: 'https://i.redd.it/h4q9vx0i8ck51.jpg',
	},
	{
		code: 'ch',
		name: 'Switzerland',
		icon:
			'https://theflagcompany.in/wp-content/uploads/2018/10/switzerland-flag-small-1.png',
	},
	{
		code: 'cn',
		name: 'China',
		icon:
			'https://www.cps.bureauveritas.com/sites/g/files/zypfnx236/files/2020-07/Flag-China_03.jpg',
	},
	{
		code: 'co',
		name: 'Colombia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
	},
	{
		code: 'cu',
		name: 'Cuba',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1200px-Flag_of_Cuba.svg.png',
	},
	{
		code: 'cz',
		name: 'Czech Republic',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
	},
	{
		code: 'de',
		name: 'Germany',
		icon:
			'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
	},
	{
		code: 'eg',
		name: 'Egypt',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/220px-Flag_of_Egypt.svg.png',
	},
	{
		code: 'fr',
		name: 'France',
		icon: '',
	},
	{
		code: 'gb',
		name: 'England',
		icon:
			'https://cdn1.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_Kingdom_-_Circle-512.png',
	},
	{
		code: 'gr',
		name: 'Greece',
		icon: 'https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg',
	},
	{
		code: 'hk',
		name: 'Hong Kong',
		icon:
			'https://i.pinimg.com/originals/65/f3/fc/65f3fcd236963cb2cb811337553d63e9.jpg',
	},
	{
		code: 'hu',
		name: 'Hungary',
		icon:
			'https://i.pinimg.com/originals/a7/43/78/a743780e6eba27936069b0a14f2c28b7.jpg',
	},
	{
		code: 'id',
		name: 'Indonesia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
	},
	{
		code: 'ie',
		name: 'Ireland',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
	},
	{
		code: 'il',
		name: 'Israel',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/234px-Flag_of_Israel.svg.png',
	},
	{
		code: 'in',
		name: 'India',
		icon:
			'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/india-512.png',
	},
	{
		code: 'it',
		name: 'Italy',
		icon: 'https://wallpaperaccess.com/full/290436.jpg',
	},
	{
		code: 'jp',
		name: 'Japan',
		icon:
			'https://studentaffairs.duke.edu/sites/default/files/styles/large/public/u110/Japan-flag-wallpaper-12.gif?itok=taKeh-y9',
	},
	{
		code: 'kr',
		name: 'South Korea',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
	},
	{
		code: 'lt',
		name: 'Lithuania',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
	},
	{
		code: 'lv',
		name: 'Latvia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
	},
	{
		code: 'ma',
		name: 'Morocco',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
	},
	{
		code: 'mx',
		name: 'Mexico',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
	},
	{
		code: 'my',
		name: 'Malaysia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/255px-Flag_of_Malaysia.svg.png',
	},
	{
		code: 'ng',
		name: 'Nigeria',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
	},
	{
		code: 'nl',
		name: 'Netherlands',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
	},
	{
		code: 'no',
		name: 'Norway',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
	},
	{
		code: 'nz',
		name: 'New Zealand',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
	},
	{
		code: 'ph',
		name: 'Philippines',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
	},
	{
		code: 'pl',
		name: 'Poland',
		icon:
			'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png',
	},
	{
		code: 'pt',
		name: 'Portugal',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png',
	},
	{
		code: 'ro',
		name: 'Romania',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png',
	},
	{
		code: 'rs',
		name: 'Serbia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
	},
	{
		code: 'ru',
		name: 'Russia',
		icon: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
	},
	{
		code: 'sa',
		name: 'Saudia Arabia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
	},
	{
		code: 'se',
		name: 'Sweden',
		icon:
			'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png',
	},
	{
		code: 'sg',
		name: 'Singapore',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png',
	},
	{
		code: 'si',
		name: 'Slovenia',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
	},
	{
		code: 'sk',
		name: 'Slovakia',
		icon: 'https://cdn.britannica.com/88/7888-004-506F9039/Flag-Slovakia.jpg',
	},
	{
		code: 'th',
		name: 'Thailand',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
	},
	{
		code: 'tr',
		name: 'Turkey',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
	},
	{
		code: 'tw',
		name: 'Taiwan',
		icon: 'https://cdn.britannica.com/62/4562-004-BBCF13EC/Flag-Taiwan.jpg',
	},
	{
		code: 'ua',
		name: 'Ukraine',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
	},
	{
		code: 'us',
		name: 'United States',
		icon:
			'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
	},
	{
		code: 've',
		name: 'Venezuela',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png',
	},
	{
		code: 'za',
		name: 'South Africa',
		icon:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1200px-Flag_of_South_Africa.svg.png',
	},
];

export default country_list;
