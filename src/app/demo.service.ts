import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }

  getServerData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}