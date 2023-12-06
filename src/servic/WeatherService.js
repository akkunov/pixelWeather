import {$api} from "../http/index.js";

export class WeatherService {
    static async getWeatherByName (town, lang= 'ru') {
		return $api.get(`?q=${town}&appid=${'d47577b8e70310f099256fd7de350c6d'}&lang=${lang}`)
    }
    static async getWeatherByLang (lat,lon, lang= 'ru') {
	return $api.get(`?lat=${lat}&lon=${lon}&appid=${'d47577b8e70310f099256fd7de350c6d'}&lang=${lang}`)
    }
}
//40.50033743332117, 72.81840593690994