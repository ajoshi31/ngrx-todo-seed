import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as TodoActions from "../../store/actions/todo.actions";
import {ITodo} from "../../models/todo";
import {selectSelectedTodo, selectTodoList} from "../../store/selectors/todo.selector";
import {IAppState} from "../../store/state/index";
import {NgForm} from "@angular/forms";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddTodoComponent implements OnInit {

  public formData: ITodo = new ITodo();
  isEditing: boolean;
  //noinspection TypeScriptValidateTypes
  formData$ = this.store.pipe(select(selectSelectedTodo)).subscribe(data => {
    if (data !== null) {
      this.formData = <ITodo>{...data, ...{}};
      this.isEditing = true;
    }
  });

  constructor(private store: Store<IAppState>, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addTodo(form: NgForm) {

    if (this.isEditing) {
      form.value.id = this.formData.id;
      form.value.status = this.formData.status;
      this.store.dispatch(new TodoActions.UpdateTodo(form.value));
    } else {
      form.value.status = false;
      // The id has to be generated after getting the success from API here we are just using state management check
      // and create random id at client side
      //noinspection TypeScriptValidateTypes
      this.store.pipe(select(selectTodoList)).subscribe(data => {
        form.value.id = data.length + 1;
      }).unsubscribe();
      this.store.dispatch(new TodoActions.AddTodo(form.value));
    }
    form.resetForm(new ITodo());
    this.isEditing = false;

    this._snackBar.open('Data Updated Successfully!!', 'End now', <MatSnackBarConfig>{
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });

  }

}

