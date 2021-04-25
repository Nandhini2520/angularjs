
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent   {

  title = 'sampleee';
  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    password: ''
  });
  constructor(
    private fb: FormBuilder
    //private hero: FormGroup
    //private fb: FormGroup
  ) { }
btnClick()
{
  alert('Your order has been submitted' + JSON.stringify(this.checkoutForm.value));

  alert("special characters not allowed");
}
// onClickSubmit(data: any){
//   alert("special characters not allowed" + data.username);
// }
}


                  
   



