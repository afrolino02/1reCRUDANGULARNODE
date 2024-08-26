import { getProduct } from './../../../../server/src/controllers/producto';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
/*   listProducts: Product[] =[
  {
    id: 1,
    name: "Tyrannosaurus Rex Toy",
    description: "A large, realistic T-Rex toy for dinosaur enthusiasts.",
    price: 29.99,
    stock: 15
  },
  {
    id: 2,
    name: "Stegosaurus Plush",
    description: "A soft and cuddly Stegosaurus plush toy.",
    price: 19.99,
    stock: 30
  },
  {
    id: 3,
    name: "Dinosaur Puzzle",
    description: "A 100-piece puzzle featuring various dinosaurs.",
    price: 14.99,
    stock: 25
  },
  {
    id: 4,
    name: "Dinosaur Coloring Book",
    description: "A coloring book with 50 pages of dinosaur illustrations.",
    price: 9.99,
    stock: 50
  },
  {
    id: 5,
    name: "Dinosaur Egg Dig Kit",
    description: "A fun excavation kit where you dig up dinosaur fossils.",
    price: 24.99,
    stock: 20
  }
 ] */
  public loading: boolean = false
  public listProducts: Product[]= []
  constructor( private _productService: ProductService){}

  showSuccessAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Your operation was successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngO  nChanges.
    //Add 'implements OnInit' to the class.
    this.getListProduct()

  }

   getListProduct(){

    this._productService.getListProducts().subscribe(async (data:Product[])=> {
      this.loading = true
      this.listProducts =  await data
      this.loading = false



  })}

  deleteProduct(id: number) {
    console.log(id)
    this._productService.deleteProduct(id).subscribe((data: void) => {
      this.loading = true

      this.showSuccessAlert()
      this.loading = false
      this.getListProduct()
    });

  }


}
