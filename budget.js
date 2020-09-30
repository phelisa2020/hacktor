module.exports = function budget() {

    let rentCost;
    let transportCost;
    let groceryCost;

    let budgetAmount;

    let expenseList = [];


    function setExpenses(settings) {
        rentCost = Number(settings.rentCost);
        transportCost = Number(settings.transportCost);
        groceryCost = Number(settings.groceryCost);
        budgetAmount = Number(settings.budgetAmount);



    }


    function getExpenses() {
        return {
            rentCost,
            transportCost,
            groceryCost,
            budgetAmount
        }

    }

    function makeChanges (additions){
        let cost = 0;

        if (additions === "rent") {
            cost = rentCost

        }
        if (additions === "transport") {
            cost = transportCost
        }

        else if (additions === "grocery") {
            cost = groceryCost
        }

        expenseList.push({
            variety: additions,
            cost,

        });

        
    }
 
        function changes (){
            return expenseList
        }

        function getTotal(variety) {
            return expenseList.reduce((total, additions) => {
                let val = additions.variety === variety ? additions.cost : 0;
                return total + val;
            }, 0);
        }
    
        function totalExpenses() {
            return getTotal('rent') + getTotal('transport') + getTotal('grocery');
        }

        function totals(){
            let rentTotal = getTotal('rent').toFixed(2);
            let transportTotal = getTotal('transport').toFixed(2);
            let groceryTotal = getTotal('grocery').toFixed(2);
            return {
                rentTotal,
                transportTotal,
                groceryTotal
            }

        }

return {
    setExpenses,
    getExpenses,
    makeChanges,
    changes,
    getTotal,
    totalExpenses,
    totals
}



}



