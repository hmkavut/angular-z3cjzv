import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  
  shippingItems; 

  constructor(private cartService : CartService) { }

  ngOnInit() {
    this.shippingItems = this.cartService.getShippingPrices();
  }

}