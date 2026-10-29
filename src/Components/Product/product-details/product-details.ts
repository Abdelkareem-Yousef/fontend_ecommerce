import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from "../product-card/product.model";

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product: Product | null = null;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // paramMap (not snapshot) so the page updates if the id changes
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.product = null;
      this.error = false;

      this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).subscribe({
        next: (result) => {
          this.product = result;
          this.cdr.detectChanges();
        },
        error: () => {
          this.error = true;
          this.cdr.detectChanges();
        },
      });
    });
  }
}
