/************
 * UI MODULE
 * 
 * Get input values
 * Add the new item to the UI
 * Update the UI
 */

var uiController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetValue: '.budget__value',
        budgetIncome: '.budget__income--value',
        budgetExpenses: '.budget__expenses--value',
        budgetPercentage: '.budget__expenses--percentage',
        container: '.container',
        item: '.item',
        itemPercentage: '.item__percentage',
        dateLabel: '.budget__title--month',
        redColorCSS: 'red',
        redFocusCSS: 'red-focus'
    };

    var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return {

        getInput: function(){            
            return{
                type: document.querySelector(DOMstrings.inputType).value,  // Will be 'inc' or 'exp'.
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };

        },

        addListItem : function(obj, type){

            var html, newHtml, element;

            // 1. Create HTML string with placeholder text.

            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'exp'){
                 element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // 2. Replace the placeholder text with some actual data.

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', this.formatNumber(obj.value,type));

            


            // 3. Insert the HTML into the DOM.

            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            this.clearFields();

        },

        deleteListItem: function(itemId){

            var element = document.getElementById(itemId);

            if (element){
                element.parentNode.removeChild(element);
            }
            
        },

        clearFields: function(){

            // Retrieve a list of the input elements we want to clear.
            var fields = document.querySelectorAll(DOMstrings.inputType + ', ' + DOMstrings.inputDesc + ', ' + DOMstrings.inputValue);

            //Convert fields list into an array.
            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){

                var addTypeClass = DOMstrings.inputType.replace('.','');
                if(current.classList.contains(addTypeClass))
                {
                    current.value = "inc";
                }
                else{
                    current.value = "";
                }
            });

            document.querySelector(DOMstrings.inputDesc).focus();
        },

        getDOMstrings: function(){
            return DOMstrings;
        },

        formatNumber : function(value, type){
            /* ES6 */
            // return (value > 0 ? (type === 'inc' ? '+ ' : '- ') : '') + value.toLocaleString('es',{
            //     style: 'currency',
            //     currency: 'EUR',
            //     currencyDisplay: 'symbol',
            //     useGrouping: true
            // });

            var strValue = value.toFixed(2);
            var decimalPos = strValue.indexOf('.');
            var result = strValue.substring(decimalPos);

            for(var i = decimalPos; i > 0 ; i -= 3)
            {
                result = ((i-3) > 0 ? ',' : '') + strValue.slice(Math.max(i-3,0),i) + result;
            }          

            return (value > 0 ? (type === 'inc' ? '+ ' : '- ') : '') + result;
        },

        displayBudget: function(budget){
            // document.querySelector(DOMstrings.budgetValue).textContent = (Math.sign(budget.budget) > 0 ? '+ ' : '') + Number(budget.budget).toFixed(2).toLocaleString();
            document.querySelector(DOMstrings.budgetValue).textContent = this.formatNumber(budget.budget,'inc');
            document.querySelector(DOMstrings.budgetIncome).
            textContent = this.formatNumber(budget.totalInc, 'inc');
            document.querySelector(DOMstrings.budgetExpenses).textContent = this.formatNumber(budget.totalExp, 'exp');
            document.querySelector(DOMstrings.budgetPercentage).textContent = budget.percentage + '%';
        },

        
        displayPercentages : function(percentages){

            percentages.forEach(function(current,index,arr){
                var uiItem = document.getElementById(current.uiID);
                
                if (uiItem)
                {
                    var divPerc = uiItem.getElementsByClassName(DOMstrings.itemPercentage.replace('.',''))[0];

                    if (divPerc){
                        divPerc.textContent = current.percentage + '%';
                    }
                }
            });
        },

        displayMonth: function(){
            var monthSpan = document.querySelector(DOMstrings.dateLabel);

            if (monthSpan){
                var now = new Date();
                monthSpan.textContent = monthNames[now.getMonth()] + ' ' + now.getFullYear();
            }
        },

        changedType: function(event){
            //Get the selected type value ('exp' or 'inc');
            var type = event.target.selectedOptions[0].value;
 
            // Get the input fields and the add button.
            var items = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputValue + ',' + DOMstrings.inputDesc + ',' + DOMstrings.inputBtn);

            // Add or remove classes based on type value
            // and nodeName.
            items.forEach(function(current,index,arr){
                // Is the current element a button?
                var isBtn = (current.nodeName === 'BUTTON');

                //If the element is a button, add or remove 
                // '.red' class, otherwise, add or remove '.red-focus' class.
                if (type === 'exp'){
                    current.classList.add(isBtn ? DOMstrings.redColorCSS : DOMstrings.redFocusCSS);
                }
                else
                {
                    current.classList.remove(isBtn ? DOMstrings.redColorCSS : DOMstrings.redFocusCSS);
                }
            });
        },
        

        /*
        //Jonas Solution
        displayPercentages : function(percentages){

            //Get a node list of all div perc. elements.
            var fields = document.querySelectorAll(DOMstrings.itemPercentage);

            var nodeListForEach = function(list, callback){
                for(var i = 0; i < list.length; i++){
                    callback(list[i], i);
                }
            };


            nodeListForEach(fields, function(current, index){

                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }
                else{
                    current.textContent = '---';
                }
            });

        }
        */


    };

})();