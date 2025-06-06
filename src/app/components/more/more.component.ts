import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../../types';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf],
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss',
})
export class MoreComponent {
  @Input() recipes: Recipe[] = [] as Recipe[];
}
