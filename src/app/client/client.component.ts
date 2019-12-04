import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

 client = [

 // {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
 // {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'},
 // {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
 // {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com' },
 // {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com' },
 // {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'},
 // {id: '4', name: 'Samuel Kwakye', address: 'East Legon', email: 'kwayesamuel@gmail.com'},
 // {id: '5', name: 'Franklin Luther', address: 'Haatso', email: 'franklin@gmail.com'}
  
  ];

 

  constructor(private clientservice: ClientService) { }
  
  getClient(): void {
    this.clientservice.getClient()
    .subscribe(data => this.client=data);
  }
  

  ngOnInit() {
  this.getClient();
  }

}
