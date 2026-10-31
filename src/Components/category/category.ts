import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../Product/product-card/product.model";
import { ProductCard } from '../Product/product-card/product-card';
import { Notfound } from '../notfound/notfound';

@Component({
  selector: 'app-category',
  imports: [ProductCard,Notfound],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category implements OnInit {
  products: Product[] = [];
  categoryName = '';

  // URL slug -> API category name
  private categoryMap: Record<string, string> = {
    men: "men's clothing",
    women: "women's clothing",
    tech: 'electronics',
    jewelery: 'jewelery',
  };

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  get_product(category: string) {
    this.http
      .get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
      .subscribe({
        next: (result) => {
          this.products = result;
          this.cdr.detectChanges();
        },
        error: (error) => console.log('error', error),
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('name') ?? '';
      this.categoryName = this.categoryMap[slug] ?? '';
      this.get_product(this.categoryName);
    });
  }
}
