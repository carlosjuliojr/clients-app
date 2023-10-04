import { Injectable } from '@angular/core';
import { Client } from './client/client.component';
import { CLIENTS } from './clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  getClients() : Client[] {
    return CLIENTS;
  }

  constructor() { }
}
