import {createSelector} from '@ngrx/store';

import {IAppState} from '../state/index';
import {IToDoState} from '../state/todo.state';

const selectTodoState = (state: IAppState) => state.todos;

export const selectTodoList = createSelector(
  selectTodoState,
  (state: IToDoState) => state.todos
);
export const selectSelectedTodo = createSelector(
  selectTodoState,
  (state: IToDoState) => state.selectedTodo
);
