import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { RecipesService } from '../../services/recipe.service';
import { Recipe, Recipes } from '../../../types';
import { RecipeComponent as _RecipeComponent } from '../../components/recipe/recipe.component';
import { MoreComponent } from '../../components/more/more.component';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [RouterModule, _RecipeComponent, MoreComponent, NgIf, NgForOf],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  id: number | null = null;
  recipe: Recipe | any = null;
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  fetchRecipe() {
    this.recipesService
      .getRecipes('https://dummyjson.com/recipes?limit=50')
      .subscribe({
        next: (data: Recipes) => {
          this.recipes = data.recipes.slice(0, 6);
          this.recipe =
            data.recipes.find((recipe) => recipe.id === this.id) || null;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = parseFloat(params['id']);
      this.fetchRecipe();
    });
  }
}
