
import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";
import { toast } from "sonner";
import { TResponse } from "../../types/global";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authorization", `${token}`)
        }
        return headers
    }


})

const baseQueryWithRefreshToken:BaseQueryFn<FetchArgs,BaseQueryApi,DefinitionType> = async (args, api, extraOptions) :Promise<any>=> {
    let result = await baseQuery(args, api, extraOptions) 

if(result?.error?.status === 404){
 return   toast.error((result as TResponse)?.error?.data.message)
}


    //if access token expaire
    if (result?.error?.status === 401) {
        console.log('sending refresh token');
        //sending refresh token
        const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
            method: "POST",
            credentials: "include"
        })
        // api.dispatch(setUser())
        const data = await res.json()
        const newAccessToken = data?.data?.accessToken;

        if(newAccessToken){
            const user = (api.getState()as RootState).auth.user;

            api.dispatch(setUser({ user, token: newAccessToken }))
            result = await baseQuery(args, api, extraOptions)
        }
        else{
            api.dispatch(logOut())
        }
        

    }
    return result
}



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})


