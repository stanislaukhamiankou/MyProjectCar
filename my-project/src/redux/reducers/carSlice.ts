import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICar, ICarState } from '../types'

const initialState: ICarState = {
  car: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    loading(state: ICarState) {
      state.isLoading = true
      state.error = null
    },
    finish(state: ICarState) {
      state.isLoading = false
    },
    error(
      state: ICarState,
      action: PayloadAction<{ error: ICarState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
    carLoadSuccess(state: ICarState, action: PayloadAction<ICar>) {
      state.isLoading = false
      state.error = ''
      state.car = action.payload
    },
    setCar(state: ICarState, action: PayloadAction<ICar>) {
      state.car = { ...state.car, ...action.payload }
    },
    clearSetCar(state: ICarState) {
        state.car = null
    }

  },
})

export default carSlice.reducer
export const { loading, finish, error, carLoadSuccess, setCar, clearSetCar } = carSlice.actions
