import { Component, Input } from '@angular/core';
import { Match } from 'src/app/model/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  constructor() {}

  Batsman1: Match=new Match(0,"",0,0,0,0);
  Batsman2:Match=new Match(0,"",0,0,0,0);

  customRuns:number=0;

  @Input() form:any;

  runs:number=0;
  wickets:number=0;
  overs:number=0;
  homeTeam:string="RCB";
  bowls:any[]=[];

  wide="";
  byes="";
  cheked=""

  WhoOnStrike=true;
  runRate:number=0;
  
  
  ballsInOvers:number=0;

  addRuns(val:number){
    if(this.wide==""){
      this.ballsInOvers+=1;
    }
    
    this.runs+=val;
    if(this.wide=="Wd" || this.wide=="Nb"){
      this.runs+=1;
    }
    this.bowls.push([{"Run":val},{"Extra":this.wide+this.byes}]);
    if(this.ballsInOvers==6){
      this.overs+=1;
      window.dialog2.showModal();
      this.ballsInOvers=0; 
      this.bowls=[]; 
      if(this.WhoOnStrike){
        this.WhoOnStrike=false;
      }
      else{
        this.WhoOnStrike=true;
      }
    }
    

    if(this.WhoOnStrike){
      if(this.wide!="Wd"){
        this.Batsman1.runs+=val; 
      }
      if(val==4){
        this.Batsman1.fours+=1;
      }
      else if(val==6){
        this.Batsman1.six+=1;
      }
      if(this.wide=="" || this.wide!=="Wd"){
        this.Batsman1.bowlsPlayed+=1;
      }
      this.Batsman1.strikeRate=(this.Batsman1.runs/this.Batsman1.bowlsPlayed)*100;
    }
    else{
      if(this.wide!="Wd"){
        this.Batsman2.runs+=val; 
      }
      if(val==4){
        this.Batsman2.fours+=1;
      }
      else if(val==6){
        this.Batsman2.six+=1;
      }
      if(this.wide=="" || this.wide!=="Wd"){
        this.Batsman2.bowlsPlayed+=1;
      }
      this.Batsman2.strikeRate=(this.Batsman2.runs/this.Batsman2.bowlsPlayed)*100;
    }

    if(val%2!=0 && this.ballsInOvers!=6){
      if(this.WhoOnStrike){
        this.WhoOnStrike=false;
      }
      else{
        this.WhoOnStrike=true;
      }
      
    }
    this.wide="";
    this.byes="";
    this.cheked="";
    let totalOvers=((this.overs*6)+(this.ballsInOvers))/6;
    this.runRate=this.runs/totalOvers;

  }


  keyword = '';
  data = [
    "Shubham","Vishal"
  ];


  selectEvent(item: any) {
    // do something with selected item
    console.log(item);
  }

  onChangeSearch(val: string) {
    
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    // do something when input is focused
  }
}
declare global {
  interface Window {
    dialog2: any; 
  }
}