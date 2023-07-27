import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {

  userForm:FormGroup;
  constructor(private _fb:FormBuilder)
  {

  }

  ngOnInit()
  {
    // this.userForm = this._fb.group({
    //   fname:['',Validators.required],
    //   lname:['',Validators.required],
    //   houseno:['',Validators.required],
    //   city:['',Validators.required],
    //   pincode:['',Validators.required],

    // })

    this.userForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],

      address: this._fb.group({
        houseno: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
      })

    })

  }

  onformsubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);

    let addressFG=this.userForm.get('address');
    console.log(addressFG.value);
    console.log(addressFG.valid);
  }

}


