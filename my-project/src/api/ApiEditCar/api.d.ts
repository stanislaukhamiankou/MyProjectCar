import { ICar } from "src/redux"

export type FormEditData = {
    make: string
    model: string
    fuel_type: string
    drive: string
    cylinders: number,
    min_city_mpg: string
    max_city_mpg: string
    min_hwy_mpg: string
    max_hwy_mpg: string
    img: string
}

export type CarEditData = {
    make: string
    model: string
    fuel_type: string
    drive: string
    cylinders: number,
    min_city_mpg: string
    max_city_mpg: string
    min_hwy_mpg: string
    max_hwy_mpg: string
    img: string
}
  
export type CarEditResponse = ICar[]


export type RequestCarEditActionProps = {
    car: CarEditData
    id: string
}