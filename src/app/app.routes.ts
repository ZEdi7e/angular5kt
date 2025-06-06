import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

export const routes: Routes = [
  { path: '', redirectTo: '/breakfast/all', pathMatch: 'full' },
  { path: 'breakfast/all', component: BreakfastComponent },
  { path: 'dinner/:difficulty', component: DinnerComponent },
  { path: 'lunch/:difficulty', component: LunchComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: '**', redirectTo: '/breakfast/all' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
