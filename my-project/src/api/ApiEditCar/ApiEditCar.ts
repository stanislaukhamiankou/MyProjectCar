import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { ICar } from 'src/redux'
import { CarEditData } from '.'

const fetcher = new Fetcher()

export const reqesEditCar = (id: string, data: CarEditData) => 
fetcher.requestToReceive<CarEditData, ICar>({
    url: `http://localhost:3000/car/${id}`,
    method: HTTP_METHODS.PUT,
    data
})