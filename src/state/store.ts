import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileActionsType, ProfileReducer} from "./reducers/profile-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {InitializationActionsType, InitializeReducer} from "./reducers/initialization-reducer";
import {AuthActionsType, authReducer} from "./reducers/auth-reducer";


const rootReducer = combineReducers({
    profile: ProfileReducer,
    initialize: InitializeReducer,
    authMe: authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof store.getState>
export type AllActionsType = AuthActionsType | InitializationActionsType | ProfileActionsType

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AllActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>