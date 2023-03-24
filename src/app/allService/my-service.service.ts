import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  baseUrl='http://localhost:3000/myDatabase';

  constructor(private http:HttpClient) { }

  getDataFromApi(){
    return this.http.get<Employee>(this.baseUrl)
  }

  postDataFromApi(employee:Employee){
    return this.http.post<Employee>(this.baseUrl,employee);
  }
  deleteFromApi(id:string){
      return this.http.delete(this.baseUrl + '/'+ id);
  }
}
