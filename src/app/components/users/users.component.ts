import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Models";
import {UserRepository} from "../../repository/UserRepository";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userRepository: UserRepository) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.userRepository.getUsers();
  }

  async banUser(email: string): Promise<void> {
    //Pas encore implémenté
    await this.userRepository.banUser(email);
  }

  async restoreUser(email: string): Promise<void> {
    // Pas encore implémenté
    // await this.userRepository.restore(email);
  }
}
