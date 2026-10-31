import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { Notfound } from '../Components/notfound/notfound';
import { About } from '../Components/about/about';
import { Login } from '../Components/Sign/login/login';
import { Register } from '../Components/Sign/register/register';
import { Category } from '../Components/category/category';
import { ProductDetails } from "../Components/Product/product-details/product-details";


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', loadComponent:()=>import('../Components/home/home').then((m)=>m.Home)},
  {path:'about', component:About},
  {path:'login', component:Login},
  {path:'register', component:Register},
  {path:'category/:name', loadComponent:()=>import('../Components/category/category').then((m)=>m.Category)},
  {path:'product/:id', component:ProductDetails},
  {path: '**', component:Notfound}
];
