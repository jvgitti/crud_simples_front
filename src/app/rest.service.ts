import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://crud-jvg.herokuapp.com/usuario";
    return this.http.get(url);
  }

  postData(json:any){
    let url = "https://crud-jvg.herokuapp.com/usuario";
    return this.http.post(url, json);
  }

  deleteData(id:any){
    let url = "https://crud-jvg.herokuapp.com/usuario/" + id
    return this.http.delete(url)
  }
}
