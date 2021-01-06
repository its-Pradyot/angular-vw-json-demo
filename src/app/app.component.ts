import { Component, OnInit, VERSION } from "@angular/core";
import { AsyncdataService } from "./asyncdata.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "http-demo";

  mydata = [];

  empid = "";

  ename = "";

  salary = "";

  constructor(private ser: AsyncdataService) {}

  ngOnInit() {
    var temp = this.ser.getHttpData().subscribe(data => {
      this.mydata = Array.from(Object.keys(data), i => data[i]);
    });
  }

  getWebData() {
    console.log(this.mydata);

    this.ser.postHttpData(this.empid, this.ename, this.salary).subscribe(res => {
      console.log("Res = " + res);
    });
  }
}
