import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/libs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userData;
  users=[];
  randomUsers = [
    {
      id:1,
      name: "Kullanıcı 1"
    },
    {
      id:2,
      name: "Kullanıcı 2"
    },
    {
      id:3,
      name: "Kullanıcı 3"
    },
    {
      id:4,
      name: "Kullanıcı 4"
    },
    {
      id:5,
      name: "Kullanıcı 5"
    }
  ];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data =>{
      this.userData=data
    }, error =>{
      alert("user listesi alınamadı");
      console.log("error", error);
    });
  }

  addRandomUser(){
    const index = Math.floor(Math.random()*5);
    this.users.push(this.randomUsers[index]);
  }

}
