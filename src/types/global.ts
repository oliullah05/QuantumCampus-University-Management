import { BaseQueryApi } from "@reduxjs/toolkit/query"

export type TError = {
    data: {
        success: boolean,
        message: string,
        err: string,
        stack: string
    },
    status: number
}

export type TMeta = {
    limit: number,
    page: number,
    total: number,
    totalPage: number
}


export type TResponse<T> = {
    data?: T,
    error?: TError;
    meta?: TMeta,
    status: number,
    success:boolean,
    message:string
}

export type TResponseRedux<T> =TResponse<T> & BaseQueryApi

