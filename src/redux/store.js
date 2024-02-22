/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default-member */
import {configureStore} from '@reduxjs/toolkit'
import leaderBoardReducer from './slice/leaderBoardSlice'
import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    leaderBoard: leaderBoardReducer,
  },
})

export default store
