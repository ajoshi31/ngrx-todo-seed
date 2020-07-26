import {ITodo} from '../../models/todo';

export interface IToDoState {
  todos: ITodo[];
  selectedTodo: ITodo;
}
