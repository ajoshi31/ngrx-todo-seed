import {Action} from '@ngrx/store';
import {ITodo} from '../../models/todo'
import {ITodoHttp} from "../../models/http-todo";

export enum TodoActionTypes {
  ADD = '[TODO] Add to list',
  REMOVE = '[TODO] Remove from list',
  LOAD_TODOS = '[TODO] Load items from server',
  LOAD_TODOS_SUCCESS = '[TODO] Load success',
  UPDATE_TODO = '[TODO] update the title or desc',
  TOGGLE_DONE = '[TODO] update the status of todo',
  GET_TODO = '[TODO] Get a todo by id',
  GET_TODO_SUCCESS = '[TODO] load todo success '
}

export class AddTodo implements Action {
  readonly type = <string>TodoActionTypes.ADD;

  constructor(public payload: ITodo) {
  }
}

export class RemoveTodo implements Action {
  readonly type = <string>TodoActionTypes.REMOVE;

  constructor(public payload: number) {
  }
}

export class GetTodos implements Action {
  readonly type = <string>TodoActionTypes.LOAD_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = <string>TodoActionTypes.LOAD_TODOS_SUCCESS;

  constructor(public payload: ITodoHttp) {
  }
}

export class ToggleDone implements Action {
  readonly type = <string>TodoActionTypes.TOGGLE_DONE;

  constructor(public payload: { id: number; status: boolean }) {
  }
}

export class UpdateTodo implements Action {
  readonly type = <string>TodoActionTypes.UPDATE_TODO;

  constructor(public payload: ITodo) {
  }
}

export class GetTodo implements Action {
  public readonly type = <string>TodoActionTypes.GET_TODO;

  constructor(public payload: number) {
  }
}

export class GetTodoSuccess implements Action {
  public readonly type = <string>TodoActionTypes.GET_TODO_SUCCESS;

  constructor(public payload: ITodo) {
  }
}

export type TodoActions = AddTodo
  | RemoveTodo
  | GetTodos
  | GetTodosSuccess
  | ToggleDone
  | UpdateTodo
  | GetTodoSuccess
  | GetTodo;
