export const elementStrings = {
    loader: 'loader',
    btnSearch: 'btn-inline',
    recipe: 'recipe',
    activeResult: 'results__link--active',
    servingsButton: 'btn-tiny',
    servingsText: 'recipe__info-data--people',
    recipeCount: 'recipe__count',
    shoppingItem: 'shopping__item',
    shoppingList: 'shopping__list',
    shoppingValue: 'shopping__count-value',
    shoppingDelete: 'shopping__delete',
    likeBtn: 'recipe__love',
    likesList: 'likes__list',
    likesDiv: 'likes'
};


export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resultsList: document.querySelector('.results__list'),
    resultsPages: document.querySelector('.results__pages'),
    recipeDiv: document.querySelector(`.${elementStrings.recipe}
    `),
    servingsDiv: document.querySelector('.recipe__info-buttons'),
    shoppingList: document.querySelector(`.${elementStrings.shoppingList}`),
    likesList: document.querySelector(`.${elementStrings.likesList}`),
    likesDiv: document.querySelector(`.${elementStrings.likesDiv}`)
};


export const limitRecipeTitle = (title, limit = 17) => {

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


/** Global state of the app 
* - Search object
* - Current recipe object
* - Shopping list object
* - Linked recipes
*/
export const state = {};


export const renderLoader = (parent,addOrRemove) => {
    
    if (addOrRemove)
    {
        const loader =  `
            <div class="${elementStrings.loader}">
                <svg>
                    <use href="img/icons.svg#icon-cw"></use>
                </svg>
            </div>
        `;

        parent.insertAdjacentHTML('afterbegin',loader);
    }
    else
    {
        const spinner = document.querySelector(`.${elementStrings.loader}`);
         parent.removeChild(spinner);
    }
};