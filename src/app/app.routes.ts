import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuOrderComponent } from './page/menuorder/menuorder.component';
import { InventoryComponent } from './page/inventory/inventory.component';
import { ReportcomponentComponent } from './component/reportcomponent/reportcomponent.component';

export const routes: Routes = [

    {
        path:'',
        component: HomeComponent
    },
    {
        path:'menuorder',
        component: MenuOrderComponent
    },
    {
        path:'inventory',
        component: InventoryComponent
    },
    {
        path:'reports',
        component: ReportcomponentComponent
    }
];
