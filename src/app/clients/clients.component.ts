import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Client, ClientComponent } from './client/client.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : Client[];

  constructor(private clientService:ClientService){}
  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }
}
