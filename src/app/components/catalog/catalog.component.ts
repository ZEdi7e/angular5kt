import {
  Component,
  inject,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { MoreComponent } from '../more/more.component';
import { RecipesService } from '../../services/recipe.service';
import { Recipe, Recipes } from '../../../types';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterModule, RecipeComponent, MoreComponent, NgIf, NgFor, NgForOf],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  path: string = '';
  difficulty: string = '';

  data: Recipe[] = [];
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
    this.path = this.route.snapshot.url[0].path || 'breakfast';
    this.difficulty = this.route.snapshot.url[1].path || 'all';
  }

  fetchRecipes() {
    this.recipesService
      .getRecipes('https://dummyjson.com/recipes?limit=50')
      .subscribe({
        next: (data: Recipes) => {
          this.data = data.recipes;
          this.recipes = data.recipes;
          this.filterRecipes();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  filterRecipes() {
    this.recipes = this.data.filter((recipe) => {
      const isAllDifficulty = this.difficulty === 'all';
      const normalizedPath =
        this.path.charAt(0).toUpperCase() + this.path.slice(1);

      return (
        (isAllDifficulty ||
          recipe.difficulty.toLowerCase() === this.difficulty) &&
        recipe.mealType.includes(normalizedPath)
      );
    });

    const swiperEl: any = document.querySelector('swiper-container');
    const swiper: any = swiperEl.shadowRoot.querySelector('.swiper');
    swiper.style.overflow = 'visible';

    setTimeout(() => {
      swiperEl.swiper.update();
    }, 10);
  }

  ngOnInit(): void {
    this.fetchRecipes();
    this.route.params.subscribe((params) => {
      this.difficulty = params['difficulty'] || 'all';
      this.filterRecipes();
    });
  }
}
