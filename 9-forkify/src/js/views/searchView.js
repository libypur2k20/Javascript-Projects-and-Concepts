import {elements, elementStrings, renderLoader, limitRecipeTitle} from '../shared/base';


export const getInput = () => 
    elements.searchInput.value;


/* Jonas 'limitRecipeTitle'.
const limitRecipeTitle = (title, limit = 17) => {

    const newTitle = [];

    if (title.length > limit)
    {
        title.split(" ").reduce((acc,cur) => {
            if (acc + cur.length <= limit)
            {
                newTitle.push(cur);
            }
            return acc + cur.length;
        },0);

        return `${newTitle.join(" ")} ...`;
    }

    return title;
}
*/


const clearResults = () => {
    elements.resultsList.innerHTML = '';
    elements.resultsPages.innerHTML = '';
};



export const highlightSelected = id => {

    // Deselect previous selected item (if any).
    const antSel = elements.resultsList.querySelector(`.${elementStrings.activeResult}`)
    if (antSel)
        antSel.classList.remove(elementStrings.activeResult);
        
    // Select new recipe with href = "#id"
    const selectedLink = elements.resultsList.querySelector(`[href="#${id}"]`);
    if (selectedLink)
        selectedLink.classList.add(elementStrings.activeResult);
};



export const prepareUI = () => {
    elements.searchInput.value = '';
    clearResults();
    renderLoader(elements.resultsList.parentNode, true);

}



const renderRecipe = recipe => {
    const markup = `
     <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>   
    `
    elements.resultsList.insertAdjacentHTML('beforeend',markup);
}


const renderButtons = (page, lastPage) => {

    let strPaginationHTML = '';

    const buttons = [];
    if (page > 1) buttons.push('prev');
    if (page < lastPage) buttons.push('next');

    let numPag = 0;
    buttons.forEach( btn => {
        numPag = (btn === 'prev' ? page - 1 : page + 1);
        strPaginationHTML += `
        <button class="btn-inline results__btn--${btn}" data-goto=${numPag}>
        <span>Page ${numPag}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${btn === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
        `;
    });


    if (strPaginationHTML.length > 0)
        elements.resultsPages.insertAdjacentHTML('beforeend',strPaginationHTML);
}


export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    clearResults();
    // Render results of current page.
    const startPos = ((page - 1) * resPerPage);
    const endPos = (startPos + resPerPage);

    recipes.slice(startPos,endPos).forEach(renderRecipe);

    // Render pagination buttons.
    const maxPages = Math.ceil(recipes.length / resPerPage);
     renderButtons(page, maxPages);
}
