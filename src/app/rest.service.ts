import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "http://localhost:8080/usuario";
    return this.http.get(url);
  }

  postData(json:any){
    let url = "http://localhost:8080/usuario";
    return this.http.post(url, json);
  }

  deleteData(id:any){
    let url = "http://localhost:8080/usuario/" + id
    return this.http.delete(url)
  }
}
