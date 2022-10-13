import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  employeeCode=""
  employeeName=""
  desigination=""
  gender=""
  companyName=""
  salary=""
  Address=""
  MobileNumber=""
  companyEmailid=""
  year=""
  bloodgroup=""
  dob=""

readValues=()=>{
  let data={
  "employeeCode":this.employeeCode,
  "employeeName":this.employeeName,
  "desigination":this.desigination,
  "gender":this.gender,
  "companyName":this.companyName,
  "salary":this.salary,
  "Address":this.Address,
  "MobileNumber":this.MobileNumber,
  "companyEmailid":this.companyEmailid,
  "year":this.year,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
