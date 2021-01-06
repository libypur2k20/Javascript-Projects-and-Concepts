import {elements,state,renderLoader, elementStrings} from '../shared/base';
import Search from '../models/Search';
import * as searchView from '../views/searchView';


export default class searchCtrl{

    constructor(){
        this.addEventListeners();
    }


    addEventListeners(){
        elements.searchForm.addEventListener('submit', e => {
            e.preventDefault();
            this.controlSearch();
        });

        elements.resultsPages.addEventListener('click', e => {
            const pageToGo = e.srcElement.closest(`.${elementStrings.btnSearch}`).dataset.goto;

            if (pageToGo){
                searchView.renderResults(state.search.result,parseInt(pageToGo,10));
            }
        });

        window.addEventListener('hashchange', e => {
            const id = window.location.hash.substring(1);
            if (id)
            {
                searchView.highlightSelected(id);
            }
        });
    }  
    

    async controlSearch(){
        // 1) Get query from view
        const query = searchView.getInput(); //document.querySelector('.search__field').textContent;

        if (query) {
            // 2) New search object and add to state.
            state.search = new Search(query);

            // 3) Prepare UI for results
            searchView.prepareUI();

            try{
                // 4) Search for recipes.
                await state.search.getResults();
                // 5) Render results on UI
                searchView.renderResults(state.search.result);
                //console.log(state.search.result);
            }
            catch(err){
                alert('Error getting search results!');
            }

            renderLoader(elements.resultsList.parentNode,false);
        }
    }
}