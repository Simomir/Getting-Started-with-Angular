import { Component, OnInit } from '@angular/core';

@Component({
  // selector is needed if the component is going to be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'

  constructor() { }

  ngOnInit(): void {
  }

}
