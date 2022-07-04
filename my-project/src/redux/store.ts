import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import carSlice from './reducers/carSlice'
import carsSlice from './reducers/carsSlice'
import commentsSlice from './reducers/commentsSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    users: usersSlice,
    comments: commentsSlice,
    car: carSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
