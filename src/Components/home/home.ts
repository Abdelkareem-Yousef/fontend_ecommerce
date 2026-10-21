import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
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
  selector: 'app-home',
  imports: [Slider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


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
