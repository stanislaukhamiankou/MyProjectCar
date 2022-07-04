import { CarsInfoData, CarsInfoResponse } from './api.d'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const reqesCarInfo = (id: string) => 
    fetcher.requestToReceive<CarsInfoData, CarsInfoResponse>({
        url: `http://localhost:3000/car/${id}`,
        method: HTTP_METHODS.GET,
    })