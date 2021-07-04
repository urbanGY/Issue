import { AxiosInstance, AxiosRequestConfig } from 'axios'
import createInstance from '$utils/intercepter'

type ApiResponse<Result> = Readonly<{
    result: Result
}>

class Api {
    constructor(private readonly instance: AxiosInstance = createInstance()) {}

    async get<Result>(url: string, config?: AxiosRequestConfig): Promise<Result> {
        const { data } = await this.instance.get<ApiResponse<Result>>(url, config)

        return data.result
    }
}

export const api = new Api()
