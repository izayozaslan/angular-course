import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {IgxButtonModule} from "igniteui-angular";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const routes: Routes =[
  {
  path: "",
  component: HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, IgxButtonModule, RouterModule.forChild(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ]
})
export class HomeModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(
    http, 
    "./../../assets/118n/ ",
    "json?cb="+ new Date().getTime() );
}