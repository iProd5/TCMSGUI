import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 clients = [

  {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
  {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'},
  {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
  {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com' },
  {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com' },
  {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'},
  {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
  {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'}
  
  ];


  constructor() { }

  ngOnInit() {
  }

}
