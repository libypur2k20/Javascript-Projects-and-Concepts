import {elements, renderLoader, elementStrings} from '../shared/base';
import Fraction from 'fraction.js'


export const renderItem = item => {

    const strItem = `
        <li class="shopping__item" id="${item.id}">
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" min="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;

    elements.shoppingList.insertAdjacentHTML('beforeend',strItem);
};


export const deleteItem = id => {

    const itemToDelete = document.getElementById(id);

    if (itemToDelete){
        elements.shoppingList.removeChild(itemToDelete);
    }

};