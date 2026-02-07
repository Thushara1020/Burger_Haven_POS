import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FoodcardComponent } from "../../component/foodcard/foodcard.component";
import { OrderSummaryComponent } from "../../component/order-summary/order-summary.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FoodcardComponent, OrderSummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
