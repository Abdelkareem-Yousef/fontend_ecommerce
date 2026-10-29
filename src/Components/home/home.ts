import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Slider } from '../slider/slider';
import { ProductCard } from '../Product/product-card/product-card';
import { Product } from '../Product/product-card/product.model';

@Component({
  selector: 'app-home',
  imports: [Slider, ProductCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

  get men() {
    return this.products.filter(p => p.category === "men's clothing").slice(0, 4);
  }

  get women() {
    return this.products.filter(p => p.category === "women's clothing").slice(0, 4);
  }

  get tech() {
    return this.products.filter(p => p.category === 'electronics').slice(0, 4);
  }
}
