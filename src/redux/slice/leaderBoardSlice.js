import {createSlice} from '@reduxjs/toolkit'
import {request} from '../../api/request'

const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState: {
    loading: false,
    users: [],
  },
  reducers: {
    getUsers(state, action) {
      return {...state, users: action.payload}
    },
    setLoading(state, action) {
      return {...state, loading: action.payload}
    },
  },
})

export default leaderBardSlice.reducer
export const {getUsers, setLoading} = leaderBoardSlice.actions

export function fetchUsers() {
  return async function fetchUsersThunk(dispatch, getState) {
    dispatch(setLoading(true))
    let response = await request('GET', '/fetchUsers')

    if (response.success) {
      dispatch(getUsers(response.data))
    }
    dispatch(setLoading(false))
  }
}
