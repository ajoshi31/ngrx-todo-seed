import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs/index";
import {select, Store} from "@ngrx/store";
import {selectTodoList} from "../../store/selectors/todo.selector";
import {IAppState} from "../../store/state/index";
import {ITodo} from "../../models/todo";
import {GetTodos} from "../../store/actions/todo.actions";

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss']
})
export class ListTodoComponent implements OnInit {

  todoFetched: Observable<ITodo[]>;
  order: string = 'id';

  constructor(private store: Store<IAppState>) {
    //noinspection TypeScriptValidateTypes
    this.todoFetched = store.pipe(select(selectTodoList));
  }

  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

}
