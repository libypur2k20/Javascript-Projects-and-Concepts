import {elements,state,renderLoader, elementStrings} from '../shared/base';
import Recipe from '../models/Recipe';
import * as recipeView from '../views/recipeView';


export default class recipeCtrl{

    constructor(){
        this.addEventListeners();
    }


    addEventListeners(){

        ['hashchange','load'].forEach(event => window.addEventListener(event, this.controlRecipe));

        //Handling recipe button clicks
        elements.recipeDiv.addEventListener('click', e => {
            if (e.target.matches('.btn-decrease,.btn-decrease *')){
                if(state.recipe.servings > 1)
                    recipeView.updateServingsIngredients( state.recipe.updateServings('dec'))
            }
            else if (e.target.matches('.btn-increase,.btn-increase *')){
                recipeView.updateServingsIngredients(state.recipe.updateServings('inc'));
            }
            else if(e.target.matches('.recipe__btn-add, .recipe__btn-add *')){
                
            }

        });

    }


    async controlRecipe(){

        //Get ID from url
        const recId = window.location.hash.substring(1);

        if(recId){
            //Prepare UI for changes
            recipeView.prepareUI();

            // Create new recipe object
            state.recipe = new Recipe(recId);

            try{
                //Get recipe data
                await state.recipe.getRecipe();

                // Calculate servings and time
                state.recipe.calcTime();
                state.recipe.calcServings();
                state.recipe.parseIngredients();

                // Render recipe
                renderLoader(elements.recipeDiv,false);
                recipeView.renderRecipe(state.recipe);
            }
            catch(err){
                alert('Error processing recipe!');
                console.log(err);
            }
 
        }
    }




}