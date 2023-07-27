import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  // regForm: FormGroup;
  
  regForm: any; //Inside FormGroup, we don;t have array.

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

     this.regForm = this._fb.group({
      id: [0],
      mobilenos:new FormArray([
        new FormControl()
      ])
    })


  }

  register(formdata: FormGroup) {
   // console.log(this.regForm.value);
   console.log(this.regForm.get('mobilenos').value);
  }


  addmore(){
    this.regForm.get('mobilenos').push(new FormControl());
  }

  detelerow(index:any){
    this.regForm.get('mobilenos').removeAt(index);
  }

  


}


