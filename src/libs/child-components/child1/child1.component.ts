import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() data: any;
  @Output() resetForm : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitForm(event){
    this.resetForm.emit(event);
  }
  
  alertSth(){
    alert("Childı tetiklediniz.");
    console.log("tetiklediniz");
    this.data = {
      name: "triggered",
      status: false
    }
  }
}
