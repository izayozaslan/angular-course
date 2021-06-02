import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'angular-course';

  constructor( 
  private toastr: ToastrService ,
  private spinner: NgxSpinnerService,
  public translateService: TranslateService
  ){
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.translateService.onLangChange.subscribe(resp => {
      const title = this.translateService.instant("toaster.title");
      const message = this.translateService.instant("toaster.message");
      this.toastr.success(title, message);
    });
  }

  showSpinner(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  setLanguage(lang:string){
    this.translateService.use(lang);
  }
  
}
