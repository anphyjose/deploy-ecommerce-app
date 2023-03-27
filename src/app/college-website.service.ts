import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { details } from './custom/data';
import { registation } from './custom/registation';

@Injectable({
  providedIn: 'root'
})
export class CollegeWebsiteService {
 

  url="http://localhost:3000/Student";
  urll="http://localhost:3000/reg";
  urlll="http://localhost:3000/exam";
  urlsi="http://localhost:3000/studentInfo";
  urlex="http://localhost:3000/ExamInfo";
  urlrs="http://localhost:3000/results";



  constructor(private http:HttpClient, private router:Router) { }



// get-read



  getstd() : Observable<any>{
    return this.http.get(this.url)
  }
  getreg(): Observable<any>{
    return this.http.get(this.urll)
  }
  getexam(): Observable<any>{
    return this.http.get(this.urlll)
  }
  getstInfo(): Observable<any>{
    return this.http.get(this.urlsi)
  }
  getexInfo(): Observable<any>{
    return this.http.get(this.urlex)
  }
  getresult(): Observable<any>{
    return this.http.get(this.urlrs)
  }



// post-insert



  addstd(data: any){
    this.http.post('http://localhost:3000/Student/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }

  addreg(data: any){
    this.http.post('http://localhost:3000/reg/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }

  addexam(data: any){
    this.http.post('http://localhost:3000/exam/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }
  addstInfo(data: any){
    this.http.post('http://localhost:3000/studentInfo/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }
  addexinfo(data: any){
    this.http.post('http://localhost:3000/ExamInfo/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }
  addresult(data: any){
    this.http.post('http://localhost:3000/results/',data).subscribe((result)=>{
      console.log("result",result);
    })
  }

// update-put

  updatestd(id: any,data:details){
    return this.http.put('http://localhost:3000/Student/'+id,data)
  }


  updatereg(id: any,data:registation){
    return this.http.put('http://localhost:3000/reg/'+id,data)
  }

  updateexam(id: any,data:registation){
    return this.http.put('http://localhost:3000/exam/'+id,data)
  }
  updatestInfo(id: any,data:registation){
    return this.http.put('http://localhost:3000/studentInfo/'+id,data)
  }
  updateexInfo(id: any,data:registation){
    return this.http.put('http://localhost:3000/ExamInfo/'+id,data)
  }
  updateresult(id: any,data:registation){
    return this.http.put('http://localhost:3000/results/'+id,data)
  }



  // delete-remove

  deletestd(id: any){
    return this.http.delete('http://localhost:3000/Student/'+id)
    
  }

  deletereg(id: any){
    return this.http.delete('http://localhost:3000/reg/'+id)
    
  }
  deleteexam(id: any){
    return this.http.delete('http://localhost:3000/exam/'+id)
    
  }
  deletestInfo(id: any){
    return this.http.delete('http://localhost:3000/studentInfo/'+id)
    
  }
  deleteexInfo(id: any){
    return this.http.delete('http://localhost:3000/ExamInfo/'+id)
    
  }
  deleteresult(id: any){
    return this.http.delete('http://localhost:3000/results/'+id)
    
  }

  // individual-data-read----id


  getstdetails(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/Student/'+id)
  }

  getstdetailsreg(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/reg/'+id)
  }

  getstdetailsexam(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/exam/'+id)
  }
  getstdetailsstInfo(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/studentInfo/'+id)
  }
  getstdetailsexInfo(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/ExamInfo/'+id)
  }
  getstdetailseresult(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/results/'+id)
  }





// me


  reset(){
    this.reset
  }


// guard



setToken(token: string):void {
  localStorage.setItem('token',token);
}


 getToken() :string | null {
  return localStorage.getItem('token');
}
  isLoggedIn() {
  return this.getToken() !== null;
}
isLoggedInus() {
  return this.getToken() !== null;
}
 logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/adlog']);
}
logoutus() {
  localStorage.removeItem('token');
  this.router.navigate(['/uslog']);
}

 login({ email, password }: any): Observable<any> {
  if (email === 'admin@gmail.com' && password === '00') {
    this.setToken('adminloggin');
    return of({ name: 'admin', email: 'admin@gmail.com' });
  }
  return throwError(new Error('Failed to login'));
  
}


logus(){
  return false;
}








}









// ng serve  json-server --watch CollegeWeb.json