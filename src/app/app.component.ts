import { Component, OnInit } from '@angular/core';
import {ApiService} from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HalfSerious';
  starships = Object();

  starshipName = String;
  pilot_data = Object();
  pilotList: Array<{starshipName:string, pilot_data: object}> = [];

  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getSWData().subscribe((data)=>{
      this.starships = data;
      this.getPilotDetails();
    });
  }

  getPilotDetails() {
    for(var i=0;i<this.starships.results.length;i++) {
      if(this.starships.results[i].pilots.length){        
        for(var j=0;j<this.starships.results[i].pilots.length;j++) {          
          this.api.getPilot(this.starships.results[i].pilots[j]).subscribe((data)=>{
            this.pilotList.push({starshipName : this.starships.results[i].name, pilot_data: data});
          });
        }
      }
    }
  }  
}
