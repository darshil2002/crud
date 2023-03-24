import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { MyServiceService } from '../allService/my-service.service';
import{Employee} from '../employee'
@Component({
  selector: 'app-search-and-button',
  templateUrl: './search-and-button.component.html',
  styleUrls: ['./search-and-button.component.css']
})
export class SearchAndButtonComponent {

  
  educationOptions=[
    '10th pass',
    'diploma',
    'graduate',
    'PHD',
  ]
  constructor(private myService:MyServiceService){
  
  }
  loginForm:FormGroup =new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    birthDate: new FormControl(''),
    gender:new FormControl(''),
    education:new FormControl(''),
    companyName:new FormControl(''),
    experience:new FormControl(0),
    salary:new FormControl(0),
  })
  ngOnInit(){
    this.myService.getDataFromApi().subscribe(res=>{
      // console.log(res);
    })
  }
  
  
  formSubmit(){
    // console.log(this.loginForm?.value);
    this.myService.postDataFromApi(this.loginForm.value).subscribe()
    
  }
}
