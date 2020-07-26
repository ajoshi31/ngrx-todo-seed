import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo";
import {IAppState} from "../../store/state/index";
import {Store} from "@ngrx/store";
import {GetTodoSuccess, RemoveTodo, ToggleDone} from "../../store/actions/todo.actions";
import * as Utils from './../../utils/'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
  }

  delTodo(id) {
    this.store.dispatch(new RemoveTodo(id))
  }

  toggleTodo(id, status) {
    this.store.dispatch(new ToggleDone({id: id, status: !status}))
  }

  editTodo(todo: ITodo) {
    this.store.dispatch(new GetTodoSuccess(todo));
    Utils.scrollToTop();
  }

}
