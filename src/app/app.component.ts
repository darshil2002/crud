import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './allService/my-service.service';
import { Employee } from 'modules/employee.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
  empData:Employee[]|undefined;
  constructor(private myserv:MyServiceService){}
  ngOnInit(){
    this.myserv.getDataFromApi().subscribe(res=>{
      console.log(res);
      this.empData?.push(res);
    })
  }
}
