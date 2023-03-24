import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../allService/my-service.service';
import { Employee } from 'modules/employee.module';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
allEployees:Employee[]|undefined;

  constructor (private myserv:MyServiceService){}
  ngOnInit(){
    this.myserv.getDataFromApi().subscribe(res=>{
      // console.log(res);
  
    })
  }
}
