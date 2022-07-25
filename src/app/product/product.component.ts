import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product!: string | any;
  @Input('buyer') childBuyer = '';

  @Input() registeredBuyer!: string | any;

}
