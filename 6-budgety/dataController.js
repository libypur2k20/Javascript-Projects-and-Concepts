 /****************
  * DATA MODULE
  * 
  * Add the new item to our data structure
  * Calculate budget
  */

  var budgetController = (function(){

    var Expense = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = 0;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
      this.percentage = (
        totalIncome === 0 ? 0 : Math.round((this.value * 100) / totalIncome));
    };

    Expense.prototype.getPercentage = function(){
      return this.percentage;
    };

    var Income = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var calculateTotal = function(type){
      data.totals[type] = 0;
      data.allItems[type].forEach(item => {
        data.totals[type] += item.value;
      });

      return data.totals[type];
    }

    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: 0
    };


    return{
      addItem: function(type, desc, val){

        var newItem, ID;

        //Create newe ID
        var arrLength = data.allItems[type].length;

        ID = (arrLength === 0 ? 0 : data.allItems[type][arrLength - 1].id + 1);

        //Create new item based on 'inc' or 'exp' type
        if (type === 'inc'){
          newItem = new Income(ID,desc,val);
        }
        else if(type === 'exp'){
          newItem = new Expense(ID,desc,val);
        }

        //Push it into our data structure.
        data.allItems[type].push(newItem);


        // Return the new element.
        return newItem;
      },


      deleteItem: function(type, id){

            //Jonas solution:

        var ids, itemIndex;
        // Create a new array which contains the id of each item.
        ids = data.allItems[type].map(function(current){
          return current.id;
        });

        itemIndex = ids.indexOf(id);

        if(itemIndex >= 0)
        {
          data.allItems[type].splice(itemIndex,1);
        }

        /* My solution

        // Find the item based on it's id.
        var itemIndex = data.allItems[type].find(function(item, index, array){
          return (item.id === id);
        });

        // Removes the item by returning a filtered array where
        // the found item is not present.
        data.allItems[type] = data.allItems[type].filter(function(item){ return item != itemIndex});

        */

      },


      calculateBudget: function(){

        // calculate total income and expenses
        var totInc = calculateTotal('inc');
        var totExp = calculateTotal('exp');


        // Calculate the budget: income - expenses
        data.budget = (totInc - totExp);

        // Calculate the percentage of income that we spent.
        if (totInc > 0 && totExp > 0)
          data.percentage = Math.round((totExp * 100) / totInc);
        else
          data.percentage = 0;

      },


      calculatePercentages: function(){
          var totalInc = data.totals.inc;

          data.allItems.exp.forEach(function(current,index,array){
              current.calcPercentage(totalInc);            
          });
      },      


      getBudget: function(){
        return{
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
        };
      },


      getPercentages : function(){

        var allPerc = data.allItems.exp.map(function(current,index,arr){

          return Object.create(null,{
            id: {value: current.id},
            percentage: {value: current.getPercentage()},
            uiID: {value: 'exp-' + current.id}

          });
        });

        return allPerc;
      },


/* 
      //Jonas Solution
      getPercentages : function(){
        var percs = data.allItems.exp.map(function(curr){
          return curr.percentage;
        });

        return percs;
      },
      
*/
      viewData: function(){
        return data;
      }
    }


    
})();