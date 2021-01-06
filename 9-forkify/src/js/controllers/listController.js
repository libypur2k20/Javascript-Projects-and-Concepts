import {state,elements,elementStrings} from '../shared/base'

import List from '../models/List';
import * as listView from '../views/listView'

export default class listCtrl{

    constructor(){
        state.list = new List();
        this.addEventListeners();
    }


    addEventListeners(){
        elements.recipeDiv.addEventListener('click', e => {
            if (e.target.matches('.recipe__btn-add, .recipe__btn-add *'))
            {
                this.fillShoppingList();
            }
        })


        elements.shoppingList.addEventListener('click', e => {
            const itemId = e.srcElement.closest(`.${elementStrings.shoppingItem}`).attributes['id'].value;
            
            if(itemId){
                if (e.target.matches(`.${elementStrings.shoppingDelete},.${elementStrings.shoppingDelete} *`)){
                    state.list.deleteItem(itemId);
                    listView.deleteItem(itemId);
                    alert(state.list.items.length);
                }
                else if(e.target.matches(`.${elementStrings.shoppingValue}`)){
                    state.list.updateCount(itemId, parseFloat(e.target.value));
                }
            }
        });
    }


    fillShoppingList(){
        if(state.recipe){
            
            elements.shoppingList.innerHTML = '';

            state.recipe.ingredients.forEach(ing => {
            // Add the ingredients of the recipe to the shopping list.
            const newItem = state.list.addItem(ing.count, ing.unit, ing.ingredient);

            // Render the shopping list to the UI.
            listView.renderItem(newItem);
            });

        }
    }

}