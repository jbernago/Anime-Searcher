import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  birthDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<Array<User>>(environment.userMockApi);
  }


  insertUser(user){
    return this.httpClient.post(environment.userMockApi, user);
  }
  
  deleteUser(user){
    return this.httpClient.delete(environment.userMockApi + `/${user.id}`);
    // return this.httpClient.get(environment.userMockApi + `?name=${user.name}`);
  }

}
