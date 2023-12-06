import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {WeatherService} from "../servic/WeatherService";


export const SearchByName =  createAsyncThunk(
    'search/searchByName',
    async (name, {rejectWithValue}) =>{
	try {
	    console.log(name)
	    const response = await WeatherService.getWeatherByName(name)
	    console.log(response)
	    return response.data
	}catch (e) {
	    rejectWithValue(e.response);
	}
}
)

export const SearchByCoords = createAsyncThunk(
    'search/searchByCoords',
    async (coords,{rejectWithValue}) => {
	try {
	    const {latitude, longitude}= coords
	    const response = await WeatherService.getWeatherByLang(latitude, longitude)
	    if(response.status !== 200){
		throw new Error('server Error')
	    }
	    console.log(response)
	    return response.data
	}catch (e) {
	    return rejectWithValue(e.response);

	}
    }
)
const initialState = {
	errors: null,
	role: "USER",
	isAuth: false,
	isLoading: false,
	data: []
}
export const SearchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
	initial: (state,action)=>{}
    },
    extraReducers: builder => {
	builder.addCase(SearchByName.pending, (state, action)=>{
		state.isLoading = true;
	})
	builder.addCase(SearchByName.fulfilled, (state, action)=>{
	    state.data = action.payload;
	    state.isLoading = false;
	})
	builder.addCase(SearchByName.rejected, (state, action)=>{
	    state.errors = action.payload;
	    state.isLoading = false;
	})
    }
}

)
const {reducer,actions} = SearchSlice

export default  reducer

