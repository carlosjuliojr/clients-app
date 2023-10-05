import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client.component';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  client: Client = new Client();

 public create():void {
  console.log(this.client)
  this.clientService.createClient(this.client).subscribe(
    response => this.router.navigate(['/clients'])
  );
 }

 constructor(private clientService: ClientService, private router : Router, private activateRoute : ActivatedRoute){}
  ngOnInit(): void {

    this.activateRoute.params.subscribe(
      params => {
        let id = params['id'];
        if(id){
          this.clientService.getClientById(id).subscribe(
            cli => this.client = cli
          )
        }
      }
    )
  }

}
