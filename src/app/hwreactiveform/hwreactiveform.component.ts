import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hwreactiveform',
  templateUrl: './hwreactiveform.component.html',
  styleUrls: ['./hwreactiveform.component.css']
})
export class HwreactiveformComponent {

  name = 'Angular';
 // regform: FormGroup; //st
  regform: any;
  details: Array<any>; //Add this

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.regform = this._fb.group({
      details: this._fb.array([this.buildcontrol()]),
    });
    this.details = this.regform.controls.details.value;
  }

  buildcontrol() {
    return this._fb.group({
      fullName: [''],
      rollNumber: [''],
      class: [''],
      mobileno: [''],
    });
  }

  addcontrol() {
    const cont = <FormArray>this.regform.controls['details'];
    cont.push(this.buildcontrol());
    this.details = this.regform.controls.details.value; //Add this
  }

  deleteRow(index: any) {
    (<FormArray>this.regform.controls['details']).removeAt(index);
    this.details.splice(index, 1); //Add this
  }



}
