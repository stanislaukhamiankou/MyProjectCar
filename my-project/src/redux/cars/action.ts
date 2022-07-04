import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  carsLoadSuccess,
  setCars,
} from '../reducers/carsSlice'
import { reqesCarsInfo as reqesCarsInfoAPI, RequestCarAddActionProps, RequestCarEditActionProps} from 'src/api'
import { reqesDeleteCar as reqesDeleteCarAPI } from 'src/api'
import { requestAddCar as  requestAddCarAPI } from 'src/api'
import { reqesEditCar as requesEditCarAPI } from 'src/api'

export const requestCarsInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await reqesCarsInfoAPI()
    dispatch(carsLoadSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const requestdeleteUsers =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const result = await reqesDeleteCarAPI(id)
      if (result) {
        dispatch(requestCarsInfo())
      }
      // dispatch(requestCarsInfo())
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

export const requestAddCar =
  ({ car }: RequestCarAddActionProps): AppThunk =>
async (dispatch) => {
  try {
    dispatch(loading())
    const { data } = await requestAddCarAPI(car)
    if (data) {
      dispatch(setCars(data))
      const response = await reqesCarsInfoAPI()
      dispatch(carsLoadSuccess(response.data))
    }
    dispatch(requestCarsInfo())
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const requestEditCar =
  ({ car, id }: RequestCarEditActionProps): AppThunk =>
async (dispatch) => {
  try {
    dispatch(loading())
    const { data } = await requesEditCarAPI(id, car)
    if (data) {
      dispatch(requestCarsInfo())
    }
    dispatch(requestCarsInfo())
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

