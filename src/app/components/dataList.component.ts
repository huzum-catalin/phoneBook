
import { Component, OnInit } from '@angular/core';
import { Phone }              from './phone';
import { PhoneDataService }       from '../services/phoneDataService';




@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.css'],
  providers: [ PhoneDataService ]
})
export class DataListComponent implements OnInit {
  
  phoneList: Phone[];
  boundData: Phone[];
 private  _phoneDataService : PhoneDataService;
 private  errMsg:string;
 private counter:number;

 constructor(private _service: PhoneDataService) {
  this._phoneDataService = _service;
  this.counter = 1;
 }  

 ngOnInit() { this.getPhoneData(); }

  getPhoneData() {
    this._phoneDataService.getData()
                     .subscribe(
                       data => this.phoneList = this.mapPhoneData(data),
                       error =>  this.errMsg = <any>error);
  }

  mapPhoneData(data) {
    let res = [];
    for (var property in data) {
    if (data.hasOwnProperty(property)) {
        // do stuff
        let phone = data[property];
        res.push(phone);
    }

    
}
    /*let temp = new Phone (1,2, "asaa", "special one", "Phone", "Phone", "Phone", "Phone",false,
    true,true,  "Phone", 33);
    let res = [temp];
    return res;*/

    return res;
  }

  nextPage(){
    this.counter++;
    console.log('counter is ' + this.counter);
  }

  previousPage(){
    if(this.counter > 1) {
    this.counter--;
    console.log('counter is ' + this.counter);
  }
  return;
  }

}
