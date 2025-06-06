import { Component } from '@angular/core';
import { CatalogComponent } from '../../components/catalog/catalog.component';

@Component({
  selector: 'app-dinner',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './dinner.component.html',
  styleUrl: './dinner.component.scss',
})
export class DinnerComponent {}
