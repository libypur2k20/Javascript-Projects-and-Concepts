import Likes from '../models/Likes'
import * as likesView from '../views/likesView'
import {state,elements,elementStrings} from '../shared/base'


export default class likesCtrl{
    constructor(){
        state.likes = new Likes();

        this.addEventListeners();
    }


    addEventListeners(){
        elements.recipeDiv.addEventListener('DOMSubtreeModified', e => {
            if (state.recipe)
            {
                const id = state.recipe.id;

                const useChild = elements.recipeDiv.querySelector(`.${elementStrings.likeBtn} > svg > use`);

                if(useChild)
                    this.changeLikeStatus(id,useChild, true)
            }
        });

        elements.recipeDiv.addEventListener('click', e => {
            if(state.recipe){
                if (e.target.matches(`.${elementStrings.likeBtn},.${elementStrings.likeBtn} *`))
                {
                    const id = state.recipe.id;
                    const useChild = e.srcElement.closest('button').querySelector('[href]');

                    this.changeLikeStatus(id,useChild);
                }
            }
        });

        window.addEventListener('load', e => {
            state.likes.readStorage();
            likesView.toggleLikeMenu(state.likes.getNumLikes());
            state.likes.likes.forEach(el => {
                likesView.addLike(el);
            });
        });
    }


    changeLikeStatus(id,useChild, useChildOnly = false){
        if (state.likes.isLiked(id)){

            likesView.toggleLikeBtn(useChild,useChildOnly);
            if (useChildOnly === false){
                state.likes.deleteLike(id);
                likesView.deleteLike(id);
                likesView.toggleLikeBtn(useChild,false);
            }

        }
        else{

            likesView.toggleLikeBtn(useChild,!useChildOnly);
            if (useChildOnly === false){
                const like = state.likes.addLike(state.recipe.id, state.recipe.title, state.recipe.author, state.recipe.img);
                likesView.addLike(like);
            }

        }

        likesView.toggleLikeMenu(state.likes.getNumLikes());
    }
}