import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {id: "1", mail: "paul@gmail.com", username: "Paul", password: "", address: "" },
    {id: "2", mail: "natha@gmail.com", username: "Natha", password: "", address: "" },
    {id: "3", mail: "clement@gmail.com", username: "Clément", password: "", address: "" },
    {id: "4", mail: "ame@gmail.com", username: "Amé", password: "", address: "" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
