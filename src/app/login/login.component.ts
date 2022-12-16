import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
  //class is a collection  o fproperties and methods.
  constructor(){// 1st executed
                //used for object initialization
                //It automatically invikes when an object is created

  }
 ngOnInit(): void {//2nd executed
                   //Initaial process of a component
                  // when a componen tis created ,at same time it initialize or authorize
                  //when  a component is created,there is a lifecycle for it.

 }
 //properties
Aim="Your perfect banking partner"
Account="Please enter your acno"

acno="";// To hold the value from the user

pswd="";


 userDetails:any={
  1000:{acno:1000,username:"Amal", password:1000,balance:2000},
  1001:{acno:1001,username:"Arun", password:1001,balance:2000},
  1002:{acno:1002,username:"Akshay", password:1002,balance:2000},
 } //database
 //userdefined function//4th executed
 log(){
  // alert('Login clicked');
  var acno= this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;

  if(acno in userDetails){
  if(pswd==userDetails[acno]['password']){
    alert("Login Successfull")
  }
  else{
    alert("Incorrect password")
  }
}
else{
  alert("user not found")
}
  

 }
 acnoChange(event:any){
  // console.log(event.target.value);
  this.acno=event.target.value; //1000
  console.log(this.acno); 
 }


 pswdChange(event:any){
  // console.log(event.srcElement.value);
// console.log(event.target.value);
this.pswd=event.target.value;
console.log(this.pswd); 
 }

}
