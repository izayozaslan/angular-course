import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user={
    name:"Ahmet",
    surname:"Aydın",
    job:"Developer",
    fav_place:"Kız kulesi",
    fav_place_img:"https://www.uskudar.bel.tr/tr/main/pages/kiz-kulesi/35",
    isEditable:true,

  };

  type="text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    alert("Clicked");
  }

  inputSubmit(value:any){
    alert(value.target.value + "geldi..");
  }

}
