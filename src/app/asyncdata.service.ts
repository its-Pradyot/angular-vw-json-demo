import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AsyncdataService {
  postdata = '{    "empid": 99,    "ename": "AADISH",    "salary": 78}';

  constructor(private http: HttpClient) {}

  getHttpData() {
    return this.http.get("http://localhost:8083/emp");
  }

  postHttpData(empid, ename, salary) {
    //this.postdata={    "empid": id,    "empname": name,    "salary": sal}

    this.postdata =
      '{    "empid":' +
      empid +
      ',    "ename":"' +
      ename +
      '",    "salary":' +
      salary +
      "}";

    console.log(this.postdata);

    return this.http.post("http://localhost:8083/addemp", this.postdata, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
}
