import { Component, OnInit } from '@angular/core';
import {ApiService} from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HalfSerious';
  visible:boolean = false;
  starships = Object();
  
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getSWData().subscribe((data)=>{
      this.starships = data;    
    });
  }
  
  onclick()
  {
    this.visible = !this.visible
  }
}
