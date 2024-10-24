import { HomeComponent } from './components/landing-page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { LandingPageModule } from './components/landing-page/landing-page.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ListProductsComponent},
  { path: 'products/edit/:id', component:  AddEditProductComponent},
  { path: 'products/add', component: AddEditProductComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
