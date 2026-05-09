import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../services/users';

@Component({
  selector: 'app-user-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-manager.component.html'
})
export class UserManagerComponent implements OnInit {
  users: User[] = [];
  currentUser: User = { name: '', email: '' };
  isEdit = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  saveUser() {
    if (this.isEdit && this.currentUser.id) {
      this.userService.updateUser(this.currentUser.id, this.currentUser)
        .subscribe(() => { this.resetForm(); this.loadUsers(); });
    } else {
      this.userService.createUser(this.currentUser)
        .subscribe(() => { this.resetForm(); this.loadUsers(); });
    }
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.isEdit = true;
  }

  deleteUser(id: number | undefined) {
    if (id) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }

  resetForm() {
    this.currentUser = { name: '', email: '' };
    this.isEdit = false;
  }
}

