import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor(
    private fb: FormBuilder

  ) { }

  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    password: ['',Validators.required]

  });


  ngOnInit(): void {

  }

public onSubmit() {
    var letters = /^[A-Za-z]+$/;
    var userNameFlag= 0;
    var passwordFlag= 0;
    if (this.checkoutForm.value.name.match(letters)) {
      userNameFlag=1;
      // alert("valid ")
      // return true;
    }
    
  
    if (this.checkoutForm.value.password.match(letters)) {
     passwordFlag=1;
    }
    if(userNameFlag===0){
      alert("Invalid name");
      
      
    }
    if(passwordFlag===0){
      alert("Invalid name");
      
    }
      
    // Process checkout data here
    alert(this.checkoutForm.value.name);
    alert('Your order has been submitted' + JSON.stringify(this.checkoutForm.value));
  }

}

