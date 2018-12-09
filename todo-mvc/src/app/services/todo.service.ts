import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../models/filtering.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private static readonly TodoStorageKey = 'todos';

  private todos: Todo[];
  private filteredTodos: Todo[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private currentFilter: Filter = Filter.All;

  todos$: Observable<Todo[]> = this.todosSubject.asObservable();
  length$: Observable<number> = this.lengthSubject.asObservable();

  constructor(private storageService: LocalStorageService) {}

  private updateSubjects() {
    this.lengthSubject.next(this.todos.length);
    this.todosSubject.next(this.filteredTodos);
  }

  fetchFromLocalStorage(): void {
    this.todos = this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
    this.filteredTodos = [...this.todos];
    this.updateSubjects();
  }

  updateToLocalStorage(): void {
    this.storageService.setObject(TodoService.TodoStorageKey, this.todos);
    this.filterTodos(this.currentFilter, false);
    this.updateSubjects();
  }

  addTodo(todo: string): void {
    const date = new Date(Date.now()).getTime();
    const newTodo = new Todo(date, todo);
    this.todos.unshift(newTodo);
    this.updateToLocalStorage();
  }

  changeTodoStatus(id: number, isComplete: boolean): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    const found = this.todos[index];
    found.isCompleted = isComplete;
    this.todos.splice(index, 1, found);
    this.updateToLocalStorage();
  }

  editTodo(id: number, content: string): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    const found = this.todos[index];
    found.content = content;
    this.todos.splice(index, 1, found);
    this.updateToLocalStorage();
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    this.updateToLocalStorage();
  }

  toggleAll(): void {
    this.todos = this.todos.map(todo => {
      return {
        ...todo,
        isCompleted: !this.todos.every(t => t.isCompleted),
      };
    });
    this.updateToLocalStorage();
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.isCompleted);
    this.updateToLocalStorage();
  }

  filterTodos(filter: Filter, isFiltering: boolean = true) {
    this.currentFilter = filter;
    switch (filter) {
      case Filter.Active:
        this.filteredTodos = this.todos.filter(t => !t.isCompleted);
        break;
      case Filter.Completed:
        this.filteredTodos = this.todos.filter(t => t.isCompleted);
        break;
      case Filter.All:
        this.filteredTodos = [...this.todos];
        break;
    }

    if (isFiltering) {
      this.updateSubjects();
    }
  }
}
