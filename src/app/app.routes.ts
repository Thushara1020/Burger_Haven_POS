import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuOrderComponent } from './page/menuorder/menuorder.component';

export const routes: Routes = [

    {
        path:'',
        component: HomeComponent
    },
    {
        path:'menuorder',
        component: MenuOrderComponent
    }
];
