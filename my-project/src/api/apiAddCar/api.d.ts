import { ICar } from "src/redux"

// export type CarAddData = {
//     id: number 
//     make: string
//     model: string
//     fuel_type: string
//     drive: string
//     cylinders: string,
//     min_city_mpg: string
//     max_city_mpg: string
//     min_hwy_mpg: string
//     max_hwy_mpg: string
//     img: string
// }

export type FormAddData = {
    id: numer
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
  
export type CarAddResponse = ICar[]


export type RequestCarAddActionProps = {
    car: ICar
}