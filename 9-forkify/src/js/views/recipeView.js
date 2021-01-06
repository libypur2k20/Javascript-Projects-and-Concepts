import {elements, renderLoader, elementStrings} from '../shared/base';
import Fraction from 'fraction.js'


export const getInput = () => 
    elements.searchInput.value;


const limitRecipeTitle = (title, limit = 17) => {

    if (title.length > limit)
    {
        //Look for the last space before limit.
        const lastSpace = title.substring(0,limit).lastIndexOf(" ");
        //If lastSpace = -1, the title does not contain spaces. 
        //Ej: 'Pizza' with limit = 3, so we return the entire title.
        //Else, we return title till the last space under 17.
        //Ej: 'Pizza with red paprika'. Result: 'Pizza with red ...'
         return `${title.substring(0,(lastSpace === -1 ? title.length : lastSpace))} ...`;
    }

    return title;
}


const clearResults = () => {
    elements.recipeDiv.innerHTML = '';
};


const getFractionFromCount = floatCount =>
{

    if(floatCount){
        return new Fraction(floatCount).toFraction(true);
    }
    else
        return '?';
}

export const prepareUI = () => {
     clearResults();
     renderLoader(elements.recipeDiv,true);
}


const renderIngredients = ingredients => 
    ingredients.map(ing => `<li class="recipe__item">
    <svg class="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__count">${getFractionFromCount(ing.count)}</div>
    <div class="recipe__ingredient">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.ingredient}
    </div>
</li>`).join('');


export const renderRecipe = recipe => {

    const markup = `
        <figure class="recipe__fig">
        <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
        <h1 class="recipe__title">
            <span>${recipe.title}</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
            <span class="recipe__info-text"> minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text"> servings</span>

            <div class="recipe__info-buttons">
                <button class="btn-tiny btn-decrease">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="btn-tiny btn-increase">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="img/icons.svg#icon-heart-outlined"></use>
            </svg>
        </button>
    </div>


    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
        ${renderIngredients(recipe.ingredients)}
        </ul>

        <button class="btn-small recipe__btn recipe__btn-add">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__by">${recipe.author}</span>. Please check out directions at their website.
        </p>
        <a class="btn-small recipe__btn" href="${recipe.url}" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>
    `;
    elements.recipeDiv.insertAdjacentHTML('afterbegin',markup);
    
}

export const updateServingsIngredients = recipe => {

    //Update servings.
    elements.recipeDiv.querySelector(`.${elementStrings.servingsText}`).textContent = recipe.servings;

    //Update ingredients.
    elements.recipeDiv.querySelectorAll(`.${elementStrings.recipeCount}`).forEach( (el, idx) => {
        el.textContent = getFractionFromCount(recipe.ingredients[idx].count);
    });
};


