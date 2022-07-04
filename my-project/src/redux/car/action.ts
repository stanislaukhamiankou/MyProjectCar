import { AppThunk } from '../store'
import { reqesCarInfo as reqesCarInfoAPI } from 'src/api'
import { carLoadSuccess, error, finish, loading } from '../reducers/carSlice'


export const requestCarInfo = (id: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await reqesCarInfoAPI(id)
      dispatch(carLoadSuccess(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }