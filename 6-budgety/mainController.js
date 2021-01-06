  /****************
   * CONTROLLER MODULE
   * Add event handler
   */

var mainController = (function(budgetCtrl, UICtrl){

    var DOMstrings = UICtrl.getDOMstrings();

    var setupEventListeners = function(){

        document.querySelector(DOMstrings.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

        document.querySelector(DOMstrings.container).addEventListener('click',ctrlDeleteItem);

        document.querySelector(DOMstrings.inputType).addEventListener('change',UICtrl.changedType);

    };


    var updateBudget = function(){

        // 1. Calculate the budget.
        budgetCtrl.calculateBudget();

        // 2. Return the budget.
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI.
        UICtrl.displayBudget(budget);
    };


    var updatePercentages = function(){

        // 1. Calculate percentages.
        budgetCtrl.calculatePercentages();

        // 2. Read percentages from the budget controller.
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages.
        UICtrl.displayPercentages(percentages);

    };


    var ctrlAddItem = function(){
        
        var input, newItem;

        // 1. Get the field input data.
        input = UICtrl.getInput();
        //console.log(input);

        if(input.description !== "" && (isNaN(input.value) === false && input.value > 0))
        {

            // 2. Add the item to the budget controller.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI.
            UICtrl.addListItem(newItem, input.type);

            // 4. Calculate and update budget.
            updateBudget();

            // 5. Calculate and update percentages.
            updatePercentages();
        }

        //console.log('It works!');
    };


    var ctrlDeleteItem = function(event){

        if(event.target.localName === 'i')
        {
            var itemID = event.target.closest(DOMstrings.item).id;
            
            if (itemID){

                var splitID = itemID.split('-');
                var type = splitID[0];
                var ID = parseInt(splitID[1]);

                 // 1. delete item from the data structure.
                budgetCtrl.deleteItem(type, ID);

                // 2. Delete the item from the UI
                UICtrl.deleteListItem(itemID);

                // 3. Update the budget.
                updateBudget();

                // 4. Calculate and update percentages.
                updatePercentages();

            }
        }

    };


    return {
        init : function(){
            console.log('Application has started.');
            setupEventListeners();
            UICtrl.displayBudget(budgetCtrl.getBudget());
            UICtrl.displayMonth();
        }
    }



})(budgetController, uiController).init();