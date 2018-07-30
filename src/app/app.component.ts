import { Component } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  signupform:FormGroup;
  constructor(public formbuilder:FormBuilder){
this.signupform=this.formbuilder.group({
	username:['',[Validators.required]],
	password:['',[Validators.required]]
})
  }
  signup(){
alert("form submitted")
  }
}
