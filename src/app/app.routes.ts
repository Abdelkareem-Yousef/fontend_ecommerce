import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { Notfound } from '../Components/notfound/notfound';
import { About } from '../Components/about/about';
import { Login } from '../Components/Sign/login/login';
import { Register } from '../Components/Sign/register/register';
import { Category } from '../Components/category/category';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:Home},
  {path:'about', component:About},
  {path:'login', component:Login},
  {path:'register', component:Register},
  {path:'category/:categoryName',component:Category},
  {path: '**', component:Notfound}
];
