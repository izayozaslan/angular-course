import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import {IgxNavbarModule,IgxIconModule,IgxNavigationDrawerModule, IgxSelectModule} from 'igniteui-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import localeTr from "@angular/common/locales/tr";
import localeTrExtra from "@angular/common/locales/extra/tr";
import { AuthInterceptor, UserService } from 'src/libs';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule, 
    NgxSpinnerModule,
    IgxSelectModule,
    HttpClientModule

  ],
  providers: [CookieService, UserService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, "./assets/118n/ ","json?cb="+ new Date().getTime());
}
