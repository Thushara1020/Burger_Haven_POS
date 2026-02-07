import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FoodcardComponent } from "../../component/foodcard/foodcard.component";

@Component({
  selector: 'app-menuorder',
  imports: [NavbarComponent, FoodcardComponent],
  templateUrl: './menuorder.component.html',
  styleUrl: './menuorder.component.css'
})
export class MenuOrderComponent {

}
