import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderNavBatComponent } from './header-nav-bat/header-nav-bat.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderNavBatComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    HeaderNavBatComponent
  ]
})
export class LandingPageModule { }
