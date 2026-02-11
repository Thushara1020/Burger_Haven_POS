import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-reportcomponent',
  imports: [NavbarComponent],
  templateUrl: './reportcomponent.component.html',
  styleUrl: './reportcomponent.component.css'
})
export class ReportcomponentComponent {
printReport() {
throw new Error('Method not implemented.');
}

}
