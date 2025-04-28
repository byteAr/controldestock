import { Component } from '@angular/core';
import { SaleCreateComponent } from "../../features/sales/sale-create/sale-create.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SaleCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
