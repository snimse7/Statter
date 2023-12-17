import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

import {MatStepperModule} from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

// import {AutocompleteModule } from 'cdbangular';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@Component({
  selector: 'app-new-cricket-match-page',
  templateUrl: './new-cricket-match-page.component.html',
  styleUrls: ['./new-cricket-match-page.component.css']
})
export class NewCricketMatchPageComponent implements OnInit {

  isLinear = false; // Corrected variable name
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  // chooseTo: string = "";
  numbers: number[] = Array.from({ length: 50 }, (_, i) => i + 1);
  // homeTeam: string = "";
  // awayTeam: string = "";
  // tossWon: string = "";
  // overs:number=0;

  firstForm={
    homeTeam :"",
    awayTeam: "",
    tossWon: "",
    overs: 0,
    chooseTo:"",
    onStrike:"",
    nonStrike:"",
    bowler:""

  }
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptions = this.nonStrike.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  shubha(){
    //console.log(this.firstFormGroup);
    console.log(this.firstForm);

  }

  firstBatter="";
  myControl = new FormControl();
  nonStrike=new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

open=false;
close=true;
  next1(){
    this.open=true;
    this.close=false;
    console.log("sdf"+this.myControl.value);
    console.log("sdf"+this.nonStrike.value);
    console.log("ae"+this.firstForm.awayTeam);

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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


export interface User {
  name: string;
}

