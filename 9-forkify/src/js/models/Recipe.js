import axios from 'axios';

export default class Recipe {

    constructor(id){
        this.id = id;
    }


    async getRecipe(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }
        catch(error){
            console.log(error);
            alert('Someting went wrong :(');
        }
    }


    calcTime(){
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = (periods * 15);
    }


    calcServings(){
        this.servings = 4;
    }


    parseIngredients(){

        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce','teaspoons','teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        const units = [...unitsShort, 'kg', 'g'];

        const newIngredients = this.ingredients.map( el => {

            // 1) Uniform units.
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit,i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });


            // 2) Remove parentheses.
            ingredient = ingredient.replace(/ *\([^)]*\) */g," ");

            // 3) Parse ingredients into count, unit and ingredient.
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if (unitIndex >= 0){
                // There is a unit.
                objIng = {
                    count : eval(arrIng.slice(0,unitIndex).join('+').replace('-','')),
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }
            }
            else if(parseInt(arrIng[0],10)){
                // There is no unit, but 1st element is number.
                objIng = {
                    count: parseInt(arrIng[0],10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }
            else{
                //There is NO unit.
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient  //When property name matches object value name.
                }
            }

            return objIng;
            
        });

        this.ingredients = newIngredients;
    }


    updateServings(type){
 
        //Servings
        const newServings = (type === 'dec' ? this.servings - 1 : this.servings + 1);


        //Ingredients
        this.ingredients.forEach(ing => {
            ing.count = ((ing.count * newServings) / this.servings);
        })

        this.servings = newServings;

        return this;

    }
}