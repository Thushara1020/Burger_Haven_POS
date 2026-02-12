import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FoodcardComponent } from "../../component/foodcard/foodcard.component";
import { AdditemsComponent } from "../../component/additems/additems.component";
import { RemovitemsComponent } from "../../component/removitems/removitems.component";

@Component({
  selector: 'app-inventory',
  imports: [NavbarComponent,AdditemsComponent, RemovitemsComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
