export const Town  = () => {


    return(
	<div className={`w-[198px] h-64 p-2 bg-[1D2837] flex flex-col  border-gray-600 border-[1px] rounded-2xl 
	shadow-gray-700 shadow-lg min-w-[10em] min-h-fit text-white justify-center`}>
		<span className={`flex flex-row justify-around`}>
		    <h3>New York</h3>
		    <span>09:30</span>
		</span>
		<span className={`flex flex-col items-center mt-4 uppercase`}>
		    <img src={'heavy_rain_color.png'} style={{width: 100, height: 100}}/>
		    <p>rain</p>
		</span>
		<span className={`flex flex-row justify-between mt-4`}>
			<h4 className={`uppercase`}>aqi</h4>
			<h4 className={``}>-5&deg; -0&deg;</h4>
		</span>
	</div>
    )
}