import {useEffect, useRef, useState} from "react";
import {BiSearch} from "react-icons/bi";
import {MdOutlineClear} from "react-icons/md";
import {BsGeo} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {SearchByCoords, SearchByName} from "../store/SearchSlie.js";

export const Search = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const ref = useRef(null)
    function clearSearch () {
	setSearch('')
    }



    const handKeyPress = (e) =>{
	if (e.key === 'Enter') {
	    const text = search.trim()
	    dispatch(SearchByName(text))
	}
    }



    function getLocation () {
	const location = new Promise((resolve, reject)=> {
	    if(!navigator.geolocation) return (getLocation(), alert('Разрешите отследить ваши позицию!'))
	    navigator.geolocation.getCurrentPosition(
		(position) => {
		     resolve(position)
		    // what to do once we have the position
		},
		(error) => {
		    // display an error if we cant get the users position
		    console.error('Error getting user location:', error);
		    alert(error.message)
		    reject(error)
		}
	    );
	} )
	location.then((position) =>{
	    searchByCoords(position.coords)
	})


    }
    function searchByCoords (coords) {
	alert(coords)
	dispatch(SearchByCoords(coords))
    }
    return(
	<div className={`w-4/6 h-12 rounded-xl shadow-lg relative`}>
	    <input className={`w-full h-12 bg-gray-200 rounded-xl focus:outline-blue-700
	     transition-all duration-400 pl-4 text-lg absolute`}
		   value={search}
		   onChange={(e) =>{ setSearch(e.target.value)}}
		   ref={ref}
		   onKeyPress={handKeyPress}
	    />
	    <span className={`z-10 absolute right-2 top-4 transition duration-300 scale-150`}>
		{!search ? <BiSearch />: <MdOutlineClear onClick={clearSearch}/>}
	    </span>
	    <span className={`z-11 absolute right-11 top-4 transition duration-300 scale-150`}>
		<BsGeo onClick={getLocation} />
	    </span>
	</div>
    )
}