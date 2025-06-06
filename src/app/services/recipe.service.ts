import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Recipes } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private apiService: ApiService) {}

  // Getting recipes from the API
  getRecipes = (url: string): Observable<Recipes> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };
}
