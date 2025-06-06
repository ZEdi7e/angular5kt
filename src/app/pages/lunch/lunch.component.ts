import { Component } from '@angular/core';
import { CatalogComponent } from '../../components/catalog/catalog.component';

@Component({
  selector: 'app-lunch',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './lunch.component.html',
  styleUrl: './lunch.component.scss',
})
export class LunchComponent {}
