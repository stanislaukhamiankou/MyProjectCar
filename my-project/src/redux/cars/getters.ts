import { ICarsState } from '../index'

export const getCarsInfo = (state: { cars: ICarsState }) => state.cars.cars
