import * as TodoActions from '../actions/todo.actions';
import {IToDoState} from "../state/todo.state";
import {ITodo} from "../../models/todo";
import {createEntityAdapter, EntityState, EntityAdapter} from '@ngrx/entity';

export const initialState: IToDoState = {
  todos: [],
  selectedTodo: null
};

export function TodoReducer(state: IToDoState = initialState, action: TodoActions.TodoActions): IToDoState {
  switch (action.type) {
    case TodoActions.TodoActionTypes.ADD:
      return <IToDoState>{
        ...state,
        todos: [...state.todos, action['payload']]
      };
    case TodoActions.TodoActionTypes.LOAD_TODOS_SUCCESS: {
      return <IToDoState>{
        ...state,
        todos: action['payload']
      };
    }
    case TodoActions.TodoActionTypes.REMOVE: {
      const itemId: number = <number>action['payload'];
      const index: number = state['todos'].findIndex(x => x.id === itemId);
      let rem: ITodo[];
      if (index !== -1) {
        rem = state.todos.filter((_, i) => i !== index);
        return <IToDoState>{
          ...state,
          todos: rem
        };
      }
      return state;
    }
    case TodoActions.TodoActionTypes.TOGGLE_DONE:
      return <IToDoState>{
        ...state,
        todos:
          state.todos.map(item => {
            return item.id === action['payload'].id
              ? {...item, ...{status: action['payload'].status}} : item;
          })
      };
    case TodoActions.TodoActionTypes.UPDATE_TODO:
      return <IToDoState>{
        ...state,
        todos:
          state.todos.map(item => {
            return item.id === action['payload'].id
              ? {...item, ...{title: action['payload'].title, desc: action['payload'].desc}} : item;
          })
      };
    case TodoActions.TodoActionTypes.GET_TODO_SUCCESS : {
      return <IToDoState>{
        ...state,
        selectedTodo: action['payload']
      };
    }
    default:
      return state;
  }
}

