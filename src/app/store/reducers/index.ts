import {ActionReducerMap} from "@ngrx/store";
import {TodoReducer} from "./todo.reducers";
import {IAppState} from '../state/index'

export const reducers: ActionReducerMap<IAppState, any> = {
  todos: TodoReducer,
};
