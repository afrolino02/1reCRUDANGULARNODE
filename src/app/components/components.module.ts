import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    AddEditProductComponent,
    NavbarComponent,
    ListProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
],
  exports: [
    AddEditProductComponent,
    NavbarComponent,
    ListProductsComponent
  ]
})
export class ComponentsModule { }
