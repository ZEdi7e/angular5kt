import { Component } from '@angular/core';
import { CatalogComponent } from '../../components/catalog/catalog.component';

@Component({
  selector: 'app-breakfast',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss',
})
export class BreakfastComponent {}
