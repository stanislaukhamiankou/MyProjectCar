import { ICar } from "src/redux/types"

export type CarsInfoData = {
    id: string
    make: string
    model: string
    fuel_type: string
    drive: string
    cylinders: string,
    min_city_mpg: string
    max_city_mpg: string
    min_hwy_mpg: string
    max_hwy_mpg: string
    img: string
}

export type CarsInfoResponse = ICar