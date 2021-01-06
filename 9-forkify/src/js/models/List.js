import uniqid from 'uniqid';

export default class List {

    constructor(){
        this.items = [];
    }


    addItem(count,unit,ingredient){
        const newItem = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }

        this.items.push(newItem);
        return newItem;
    }


    deleteItem(id){
        
        const delIdx = this.items.findIndex(el => el.id === id);
        if (delIdx >= 0)
            this.items.splice(delIdx,1);
    }


    updateCount(id, newCount){

        this.items.find(el => el.id === id).count = newCount;

    }
}