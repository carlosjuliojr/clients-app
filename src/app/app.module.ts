import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientService } from './clients/client.service';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clients/form/form.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch : 'full'},
  {path: 'directives', component : DirectiveComponent},
  {path: 'clients', component : ClientsComponent},
  {path: 'clients/form', component : FormComponent},
  {path: 'clients/form/:id', component : FormComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientsComponent,
    ClientComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
