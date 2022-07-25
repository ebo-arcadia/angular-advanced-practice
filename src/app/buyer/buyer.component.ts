import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { Buyers } from '../models/buyers';

@Component({
  selector: 'parent-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = Products;
  buyers = Buyers;
  parentBuyer = 'Ebo';

}
