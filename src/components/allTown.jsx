import {BsFillCloudDrizzleFill} from "react-icons/bs";
import ScrollableDiv from "./ScrollableDiv.jsx";
const weatherData = [
    {
	day: 'Mon',
	date: 'Mar 7',
	condition: 'Cloudy',
	temperature: '16-22C',
	aqi: 71
    },
    {
	day: 'Tue',
	date: 'Mar 8',
	condition: 'Sunny',
	temperature: '18-24C',
	aqi: 65
    },
    {
	day: 'Wed',
	date: 'Mar 9',
	condition: 'Partly Cloudy',
	temperature: '15-20C',
	aqi: 75
    },
    {
	day: 'Thu',
	date: 'Mar 10',
	condition: 'Rainy',
	temperature: '14-18C',
	aqi: 80
    },
    {
	day: 'Fri',
	date: 'Mar 11',
	condition: 'Cloudy',
	temperature: '17-23C',
	aqi: 70
    },
    {
	day: 'Sat',
	date: 'Mar 12',
	condition: 'Sunny',
	temperature: '20-26C',
	aqi: 60
    },
    {
	day: 'Sun',
	date: 'Mar 13',
	condition: 'Partly Cloudy',
	temperature: '19-25C',
	aqi: 68
    },
];

export const AllTown = () => {
    return(
	<div className={`bg-[1D2837] max-w-[400px] h-64 border-gray-600 border-[1px] rounded-2xl 
	shadow-gray-700 shadow-lg min-w-[10em] min-h-fit`}
	>
		<div className={`flex flex-col p-4 `}>
		    {/*towns*/}
		    <div className={`flex flex-row text-white justify-start gap-6 text-sm pl-2`}>
			<p>New York </p>
			<p>Hangkong</p>
			<p>Tokyo</p>
		    </div>
		    <div className={`w-full h-[1px] bg-gray-700 mt-4`}></div>
		    {/*days*/}
			<ScrollableDiv style={`flex flex-row gap-4 font-mono pl-4 pt-2 text-center whitespace-nowrap scroll-auto  overflow-hidden`}>
			    {weatherData !==null   && weatherData.map((data,index) => (
				<div className={`flex flex-col items-center justify-center`}
					key={index}>
				    <p className={`text-white `}>{data.day}</p>
				    <h4 className={`text-gray-500 text-lg`}>{data.date}</h4>
				    <img src={'heavy_rain_color.png'} className={`drop-shadow-lg shadow-amber-50w-[3.5rem]`}/>
				    <span className={`text-white`}>{data.condition}</span>
				    <span className={`text-gray-500 text-lg block`}>{data.temperature}</span>
				    <span className={`text-gray-500 text-lg`}>{data.aqi}</span>
				</div>
			    ))}
			</ScrollableDiv>
		</div>
	</div>
    )
}