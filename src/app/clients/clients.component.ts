import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ClientService } from './client.service';
import { Client, ClientComponent } from './client/client.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : Client[] = [];


  constructor(private clientService:ClientService, private router:Router){}
  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }
  deleteClient(id : number) : void {
    this.clientService.deleteClientById(id).subscribe(
      resp => this.clients = this.clients.filter( client => client.id != id)
    )

  }

  editClient(client : Client) : void {
    this.router.navigate(['/clients/form/'+client.id])
  }

  getSize() : number {
   return this.clients.length
  }
}
