import {Outlet} from "react-router-dom";
import {AllTown} from "../components/allTown.jsx";
import {Towns} from "../components/Towns.jsx";
import {Search} from "../components/Search.jsx";
import {Content} from "../components/content.jsx";

export const RootRoute  = () => {
    return(
	<div className={`p-16 w-screen  bg-[#1D2837] `}>
	    <div className={`flex flex-row flex-wrap justify-between`}>
		<AllTown />
		<Towns/>
	    </div>
	    <div className={`flex flex-col items-center pt-8`}>
		<Search />
		<Content/>
	    </div>
	    <div>
		<Outlet />
	    </div>


	</div>

    )
}