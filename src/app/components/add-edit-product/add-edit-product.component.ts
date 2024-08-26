import { getProduct } from './../../../../server/src/controllers/producto';

import { Product } from './../../interfaces/product';
import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent {
  public loading : boolean = false;
  id: number;
  public operacion : string = 'agregar producto';
  formProducto: FormGroup;


  constructor(private fb: FormBuilder, private _productservice : ProductService, private router : Router, private aRouter :ActivatedRoute ){
    this.formProducto = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    })

    this.id = Number(aRouter.snapshot.paramMap.get('id'))
    console.log(this.id)

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.id != 0){
      this.operacion = 'Editar '
    }
    this.getProduct(this.id)
  }

  addProduct(){

    const Products : Product={
      name: this.formProducto.value.name,
      description: this.formProducto.value.description,
      price: this.formProducto.value.price,
      stock: this.formProducto.value.stock
    }
    this.loading = true
    if(this.id !== 0){
      Products.id = this.id
      this._productservice.updateProduct(this.id, Products).subscribe(() => {
        this.showAlert('Fue actualizado correctamente', `el producto ${Products.name} fue actualiazdo correctamente`)
        this.router.navigate(['/'])
      })
    } else{
      this._productservice.saveProduct(Products).subscribe()
      this.router.navigate(['/'])
    }

    this.loading = true
    console.log(Products)
  }

  getProduct(id :number){
    this._productservice.getProduct(id).subscribe(( data : Product) =>{
      console.log(data)

      this.formProducto.setValue({
        name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock
      })
    })
  }
  showAlert(titulo: string, text: string){
    Swal.fire({
      title: `${titulo}!`,
      text: `${text}`,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
}
