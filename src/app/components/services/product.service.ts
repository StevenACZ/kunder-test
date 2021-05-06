import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Product, ReqResProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private servicioUrl: string = 'https://hack.kunderlabs.com';
  private _product: Product = {
    show: true,
    type: 'cellphone',
    backgroundImg: '',
    buttonText: 'Ver',
    link: 'http://www.kunder.cl',
    productId: '009263',
    productImg:
      'https://s3.amazonaws.com/kunder-exam/frontend/cellphones/S8_front.png',
    productName: 'Samsung Galaxy S8',
    productDescription:
      'Aprovecha el descuento exclusivo en este equipo contratando un plan',
  };

  get product(): Product {
    return this._product;
  }

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get<ReqResProduct>(`${this.servicioUrl}/exam/telecom/api/products/new`)
      .subscribe((resp) => {
        this._product = resp.product;
      });
  }
}
