import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  isHovered = false;
  isEditing = false;

  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

  submitEdit(e: KeyboardEvent) {
    const { keyCode } = e;
    e.preventDefault();

    if (keyCode === 13) {
      this.editTodo.next(this.todo);
      this.isEditing = false;
    }
  }

  changeTodoStatus() {
    this.changeStatus.emit({ ...this.todo, isCompleted: !this.todo.isCompleted });
  }

  deleteTodo() {
    this.removeTodo.emit(this.todo);
  }
}
