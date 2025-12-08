import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  @Output() Select = new EventEmitter();
  onSelectUser() {
    this.Select.emit(this.user.id);
  }
}
