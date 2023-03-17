import { Component, OnInit } from '@angular/core';
import { product } from 'src/data/Product';
import { CarCollection } from 'src/Pro';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

  produc:any = this.crt.getProduct();
  sum:any;
  newPrice:any;
  qnty:any=1;
  // pr:any;
  // product: CarCollection[]=product ;

  constructor(private crt:CartService){}

  ngOnInit(): void {

        this.UpdateSum();
    // return this.sum;
  }

  UpdateSum() {

    this.sum=0
    // this.pr=this.produc.price * this.qnty;

    for (let i=0; i < this.produc.length;i++)
    {
      this.sum = this.sum + this.produc[i].price;
      // this.sum=this.sum + this.qnty;
    }

  }
 
      
  
  deleteItem(m:any){
     const index=this.produc.indexOf(m);

     this.produc.splice(index,1); 
    //  this.sum = this.sum + this.produc[].price;
    this.UpdateSum();
  }


}
