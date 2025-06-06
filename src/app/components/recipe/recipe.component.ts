import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../../types';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf, NgClass],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  @Input() recipe: Recipe = {} as Recipe;
  @Input() isMain: Boolean = true;
}
