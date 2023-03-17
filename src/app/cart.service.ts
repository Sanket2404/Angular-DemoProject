import { Injectable } from '@angular/core';
// import { CarCollection } from 'src/Pro';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Storage[]=[];

  constructor() { }

  addProduct(prd: any){
    this.products.push(prd);
  }
  
  getProduct(){
   return this.products;
  }

  clearCart(){
    this.products=[];
  }
} 
