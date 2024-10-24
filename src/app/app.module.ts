import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SharedModule } from './shared/shared.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    SharedModule,
    LandingPageModule
],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
