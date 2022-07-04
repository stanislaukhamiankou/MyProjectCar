import { commentsLoadSuccess, error, finish, loading } from "../reducers/commentsSlice"
import { reqestCommentsInfo as reqestCommentsInfoAPI} from 'src/api'
import { AppThunk } from "../store"

export const requestCommentsInfo = (): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await reqestCommentsInfoAPI()
      dispatch(commentsLoadSuccess(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }