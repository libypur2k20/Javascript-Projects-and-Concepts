import {state,elements,elementStrings, limitRecipeTitle} from '../shared/base'

export const addLike = like => {
    const markup = `
        <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
    `;


    elements.likesList.insertAdjacentHTML('beforeend',markup);
};


export const deleteLike = id => {
    const likeToDelete = elements.likesList.querySelector(`a[href*="#${id}"]`);

    if(likeToDelete)
    {
        const liItem = likeToDelete.closest('li');
        if (liItem)
            elements.likesList.removeChild(liItem);
    }
}

export const toggleLikeBtn = (useChild, isLiked) => {
    const hrefClass = (isLiked ? 'icon-heart' : 'icon-heart-outlined');
    useChild.setAttribute('href',`img/icons.svg#${hrefClass}`);
}

export const toggleLikeMenu = numLikes => {
    elements.likesDiv.style.visibility = (numLikes ? 'visible':'hidden');
}