import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { formReducer } from "./Formredux/reducer"
import thunk from 'redux-thunk'
const rootReduder=combineReducers({
    formReducer
})

export const store=legacy_createStore(rootReduder,applyMiddleware(thunk))
