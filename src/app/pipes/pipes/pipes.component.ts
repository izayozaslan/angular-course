import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title="aNkaRa türKiye";
  today;
  turkishUpperCaseVal;
  objectVal: Object ={
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3]}
  };
  cityName = "istanbul";
  cash = 1500;
  cities = [
    "istanbul", "izmir", "antalya"];
  constructor() { }

  ngOnInit() {
    this.today = new Date().toDateString();
    this.turkishUpperCaseVal = (this.title as any).toLocaleUpperCase("tr-TR");
  }

}
