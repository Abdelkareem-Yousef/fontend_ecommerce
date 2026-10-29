import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

 logInDetails={
  email:"",
  password:""
 }


  onSubmit(x:any){
    if(x.valid)
      {
       console.log("form has been submitted and sent to backend ",this.logInDetails);
      }
  }



}
