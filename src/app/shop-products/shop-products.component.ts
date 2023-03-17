import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { product } from 'src/data/Product';
import { CarCollection } from 'src/Pro';
import { CartService } from '../cart.service';
 

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent implements OnInit {

 prd: any="CarCollection";
 show=false;
 text:string="Buy Now";
 disabledAction=false; 
  // prd: { id: number; name: string; color: string; ModelNo: number; price: string; status: string; Qty: number; img: string; } | undefined;

  constructor(private route:ActivatedRoute,
    private cart:CartService){}

  ngOnInit(): void {
    const routeParam=this.route.snapshot.paramMap;
    const id=Number(routeParam.get("productId"));
    this.prd=product.find(prd=>prd.id===id);
  }
  popUp(){
    this.disabledAction=true;
    this.text="Continue.!!";
    alert("Congratulations..!!!");
    this.show=true;
    this.cart.addProduct(this.prd);
  }
}
