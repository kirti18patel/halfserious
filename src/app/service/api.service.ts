import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  getSWData(){
    return this.http.get("https://swapi.dev/api/starships/");
  }
}
