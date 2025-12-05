import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// Define a User type for better type safety
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };
// Alternatively, you can define an interface

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) user!: {
  //   id: string;
  //   name: string;
  //   avatar: string;
  // };
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
