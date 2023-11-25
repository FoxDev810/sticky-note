import { useDispatch } from 'react-redux';
import { createStore, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'

import rootReducer from './reducers/index'
import  { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store;