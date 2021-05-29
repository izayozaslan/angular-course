import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import {IgxNavbarModule,IgxIconModule,IgxNavigationDrawerModule} from 'igniteui-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import localeTr from "@angular/common/locales/tr";
import localeTrExtra from "@angular/common/locales/extra/tr";
import { UserService } from 'src/libs';

registerLocaleData(localeTr, "tr-TR", localeTrExtra);

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [CookieService, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
