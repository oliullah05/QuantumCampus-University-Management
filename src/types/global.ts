export type TError = {
    data: {
        success: boolean,
        message: string,
        err: string,
        stack: string
    },
    status: number
}

export type TResponse = {
    data?: any,
    error?:TError;
    
    status: number
}

