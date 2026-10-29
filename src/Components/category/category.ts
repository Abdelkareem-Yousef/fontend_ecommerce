import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../Product/product-card/product.model";
import { ProductCard } from '../Product/product-card/product-card';

@Component({
  selector: 'app-category',
  imports: [ProductCard],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  products: Product[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.get_product();
  }

  get_product() {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      next: (result) => {
        this.products = result;
        this.cdr.detectChanges();
      },
      error: (error) => console.log('error', error),
    });
  }
}
