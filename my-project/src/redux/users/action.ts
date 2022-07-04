import { notification } from "antd"

import { error, finish, loading } from "../reducers/usersSlice"
import { reqestRegister as requestRegisterAPI } from 'src/api'
import { reqestSignIn as requestSignInAPI } from 'src/api'
import { RegisterData, SignInData } from "src/api"
import { AppThunk } from "../store"

export type RequestSignInActionProps = {
    dataLogin: SignInData
}

export type RequestRegisterActionProps = {
  dataRegister: RegisterData
}

export const requestSignIn =
  ({ dataLogin }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(dataLogin)
      if (data) {
        localStorage.setItem('token', data.access_token)
      }
    } catch (err) {
      dispatch(error({ error: err }))
      notification.open({
        message: 'Invalid data entered',
      })
    } finally {
      dispatch(finish())
    }
  }

export const requestRegister =
({ dataRegister }: RequestRegisterActionProps): AppThunk =>
async (dispatch) => {
  try {
    dispatch(loading())
    const { data } = await requestRegisterAPI(dataRegister)
    if (data) {
      localStorage.setItem('token', data.access_token)
    }
  } catch (err) {
    dispatch(error({ error: err }))
    notification.open({
      message: 'Invalid data entered',
    })
  } finally {
    dispatch(finish())
  }
}