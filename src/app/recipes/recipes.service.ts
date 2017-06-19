import {Recipe} from './recipe.model';

export class RecipeService {

 private  recipes: Recipe [] = [
   new Recipe('A test recipe','This si simply a test','https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
   new Recipe('A test recipe 2','This si simply a test 2','https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg')

];

getRecipes() {
  return this.recipes.slice();
}

}
