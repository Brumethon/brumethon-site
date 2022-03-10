import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {id: "1", mail: "paul@gmail.com", firstname: "Paul", lastname: "Paul", password: "", address: "", rate: 0 },
    {id: "2", mail: "natha@gmail.com", firstname: "Natha", lastname: "TO",password: "", address: "", rate: 100 },
    {id: "3", mail: "clement@gmail.com", firstname: "Clément",lastname: "Paul", password: "", address: "", rate: 0 },
    {id: "4", mail: "ame@gmail.com", firstname: "Amé", lastname: "Paul",password: "", address: "", rate: 0 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
