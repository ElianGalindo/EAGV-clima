const getWeather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '8608917c9emsh7f5e6b12a812d15p1f34cbjsnbb86019cb253',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if (result.success){
			cityFound = result.data
			console.log('$$ ciudad => ', cityFound)
			newData()
		} else {
			alert('City was not found')
		}
		//console.log(result);
	} catch (error) {
		console.error(error);
	}
}
