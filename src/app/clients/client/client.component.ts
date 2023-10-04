import { Input } from '@angular/core';
import { Component } from '@angular/core';

export class Client {

  id: number;
  name : string;
  lastName : string;
  email : string;
  createAt : string;

}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  @Input() client!: Client;

}
