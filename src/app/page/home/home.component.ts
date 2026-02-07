import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FoodcardComponent } from "../../component/foodcard/foodcard.component";
import { OrderSummaryComponent } from "../../component/order-summary/order-summary.component";
import { DashboardComponent } from "../../component/dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
