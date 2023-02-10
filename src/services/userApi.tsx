import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Person, User } from '../models/user.model'

const baseURL = "https://blue-journalist-bbrpv.ineuron.app:4000"

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({baseUrl:baseURL}),
    tagTypes:['User'],
    endpoints:(builder)=>({
        users:builder.query<User, void>({
            query:()=>"/users",
            providesTags:['User']
        }),
        addUser:builder.mutation<void, Person>({
            query:user=> ({
                url:"/user/create",
                method:"POST",
                body:user,
            }),
            invalidatesTags:['User'],
        }),
        updateUser:builder.mutation<void, Person>({
            query:({_id,...rest})=> ({
                url:`/user/${_id}`,
                method:"PATCH",
                body:rest,
            }),
            invalidatesTags:['User'],
        }),
        deleteUser:builder.mutation<void, string>({
            query:id=> ({
                url:`/user/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:['User'],
        }),
    })
})


export const {useUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation} = userApi;

