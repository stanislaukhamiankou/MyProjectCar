export interface ICar {
  id: number
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
  size?: {
    width?: string
    height?: string
  }
}

export interface ICarsState {
  cars: ICar[]
  isLoading: boolean
  isLoaded: boolean
  error: any | null
}
