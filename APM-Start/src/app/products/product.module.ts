import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { StarComponent } from "../shared/star.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
