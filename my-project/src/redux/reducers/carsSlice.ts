import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICar, ICarsState } from '../types'

const initialState: ICarsState = {
  cars: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    loading(state: ICarsState) {
      state.isLoading = true
    },
    finish(state: ICarsState) {
      state.isLoading = false
    },
    error(
      state: ICarsState,
      action: PayloadAction<{ error: ICarsState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
    carsLoadSuccess(state: ICarsState, action: PayloadAction<ICar[]>) {
      state.isLoading = false
      state.error = ''
      state.cars = action.payload
    },
    setCars(state: ICarsState, action: PayloadAction<ICar[]>) {
      state.isLoaded = true
      state.cars = { ...state.cars, ...action.payload }
    },
  },
})

export default carsSlice.reducer
export const { loading, finish, error, carsLoadSuccess, setCars } = carsSlice.actions
