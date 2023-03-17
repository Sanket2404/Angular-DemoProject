import { Component } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent {

  msg:string="@gmail.com";
  firstName:string="";
  lastName:string="";
  submitted:boolean = false;
  //create object of contact.ts file

  contact=new Contact();

  submit(form: any)
  {
    // console.log(form);

    this.contact.firstName=form.first;
    this.contact.lastName=form.last;
    this.contact.email=form.email;
    this.contact.phone=form.mob;
    this.contact.city=form.city;
    this.contact.pin=form.pin;
    this.contact.add=form.add;

  

    alert("Submitted Successfully By" + " "+ (this.contact.firstName) );
    this.submitted=true;
 
  }
}
