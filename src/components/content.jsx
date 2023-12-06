import {useEffect} from "react";
import {useSelector} from "react-redux";
import moment from "moment";

export const Content = () => {
    const data = useSelector(state => state.users )

    const day = moment.unix(1701413696)
    console.log(day)
    useEffect(() => {
	console.log(data.data)
    },[data])
    return(
	<div className={`pt-8`}>
	    {data?.data?.main?.temp &&
	    	<div className={`flex flex-col border-gray-600 border-[1px] rounded-2xl 
			shadow-gray-700 shadow-lg min-w-[10em] min-h-fit text-white justify-center p-8`}>
			<span className={`flex flex-row justify-between`}>
			<div className={`flex flex-col`}>
			    <h1 className={`text-2xl`}>{data?.data.name}</h1>
			    <span className={`pt-8`}>{Math.round(data?.data?.main?.temp-273)}&deg;</span>
			</div>
			<span className={`pl-16`}>
			    {data?.data.weather && data?.data.weather.map((items, index) => (
				<div key={items.id}>
				    <div>
					<img src={'heavy_rain_color.png'} style={{width: '100%', height: '100%'}}/>
					<p className={`text-sm whitespace-nowrap`}>{items.description}</p>
					{/*<p>{items.icon}</p>*/}
					{/*<p>{items.main}</p>*/}
				    </div>
				</div>
			    ))}
			</span>
		    </span>

		    <span>{data?.data?.wind?.speed}</span>
		    <span>{data?.data?.wind?.deg}</span>
		    <span>{data?.data?.wind?.gust}</span>
		    <span className={`flex flex-col`}>чусвтвется как {Math.round(data?.data?.main.feels_like-273)}&deg;</span>

		</div>
	}

	</div>

    )
}