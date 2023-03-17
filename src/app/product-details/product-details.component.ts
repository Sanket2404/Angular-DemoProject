import { Component } from '@angular/core';
import { CarCollection } from 'src/Pro';
import { product } from 'src/data/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  title: string = "Sanket";
  product: CarCollection[]=product ;
  // MobileNo:number[]=[8768549301,4567890123,5463738777,7689002134];
  isUnchanged=true;


  clickMe(car:CarCollection){
    window.alert(car.name +" "+ "Cars are available");
  }

  enableBuying(){
     this.isUnchanged = !this.isUnchanged;
  }
   
}
