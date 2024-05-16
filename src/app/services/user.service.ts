import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('https://randomuser.me/api//?results=30')
  }
  getUserById(id:string){
    return this.http.get('https://randomuser.me/api//?id='+id)
  }
}
