import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { LibraryComponent } from './library/library.component';
// import { LibraryService } from './library.service';

const routes: Routes =
  [
    { path: "", 
      component:LandingPageComponent},

    { path: "products", 
      component: ProductDetailsComponent },

    { path: "products/:productId", 
      component: ShopProductsComponent },

    { path: "cart", 
      component: CartItemComponent },

    { path: "checkout", 
      component: CheckFormComponent },
     
    { path: "library", 
      component: LibraryComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
