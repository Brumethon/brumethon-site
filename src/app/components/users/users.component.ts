import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Models";
import {UserRepository} from "../../repository/UserRepository";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {id: "1", mail: "paul@gmail.com", firstname: "Paul", lastname: "Paul", password: "", address: "", rate: 0, isBan: false},
    {id: "2", mail: "natha@gmail.com", firstname: "Natha", lastname: "TO",password: "", address: "", rate: 100, isBan: false },
    {id: "3", mail: "clement@gmail.com", firstname: "Clément",lastname: "Paul", password: "", address: "", rate: 0, isBan: true },
    {id: "4", mail: "ame@gmail.com", firstname: "Amé", lastname: "Paul",password: "", address: "", rate: 0, isBan: true },
  ]

  constructor(private userRepository: UserRepository) { }

  ngOnInit(): void {
  }

  async banUser(userId: string): Promise<void> {
    // await this.userRepository.banUser(userId);
  }

  async restoreUser(userId: string): Promise<void> {
    // await this.userRepository.restore(userId);
  }
}
