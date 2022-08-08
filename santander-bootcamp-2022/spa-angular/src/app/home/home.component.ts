import { Component, OnInit } from '@angular/core';
import { USERS } from '../mocks/users';

interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: IUser[] = USERS;

  constructor() {}

  ngOnInit(): void {}
}
