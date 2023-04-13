import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const defaultValue={
    token:"",
    user:{}
}

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: JSON.parse(localStorage.getItem("userInfo")) ?? defaultValue,  
    reducers: {
        setUserInfoGlobal: (state, action) => action.payload
    }
})

export const {setUserInfoGlobal} =  userInfoSlice.actions

export default userInfoSlice.reducer

export const loginUserThunk = (token) =>  (dispatch) => {

    const URL = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
    axios.post(URL, token)
    .then(res=>{
        dispatch(setUserInfoGlobal(res.data.token))
        localStorage.setItem("userInfo", JSON.stringify(res.data.token))
    })
    .catch(err=>console.log(err))
}

export const logOutThunk = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch(setUserInfoGlobal(defaultValue))
   
}