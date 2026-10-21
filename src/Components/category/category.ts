import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

interface product{
    id:Number,
    title:string
    image:String,
    description:string,
    price:number,
    category:String
  }

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {

    id:product[]=[];

  constructor(private x:HttpClient,private cdr:ChangeDetectorRef){}

  get_product(){

    this.x.get<product[]>("https://fakestoreapi.com/products").subscribe({
      next:(result:any)=>{

        this.id=result as product[];
        this.cdr.detectChanges();
        console.log("working")

      },
      error:(error:any)=>{
        console.log("error")
      },
      complete:()=>{
        console.log("done")
      }

    });
  }

  ngOnInit(){
    this.get_product();
  }
}
