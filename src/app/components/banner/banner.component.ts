import { Component } from '@angular/core';

// Services
import { ProductService } from '../services/product.service';

// Interfaces
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  get product(): Product {
    return this.productService.product;
  }

  constructor(private productService: ProductService) {}
}
