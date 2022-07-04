import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {  IComent, IComentState } from '../types'

const initialState: IComentState = {
  comments: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    loading(state: IComentState) {
      state.isLoading = true
      state.error = null
    },
    finish(state: IComentState) {
      state.isLoading = false
    },
    error(
      state: IComentState,
      action: PayloadAction<{ error: IComentState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
    commentsLoadSuccess(state: IComentState, action: PayloadAction<IComent[]>) {
      state.isLoading = false
      state.error = ''
      state.comments = action.payload
    },
  },
})

export default commentsSlice.reducer
export const { loading, finish, error, commentsLoadSuccess } = commentsSlice.actions
