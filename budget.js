module.exports = function budget() {

    // let rentCost;
    // let transportCost;
    // let groceryCost;

    // let budgetAmount;

    let expenseList = [];
    let expenseCost;


    function setExpenses(expense) {
        if (expenseList[expense] === undefined) {
            expenseList[expense] = 0
        }
        expenseList[expense] += 1
        // rentCost = Number(settings.rentCost);
        // transportCost = Number(settings.transportCost);
        // groceryCost = Number(settings.groceryCost);
        // budgetAmount = Number(settings.budgetAmount);


    }

    function setExpenseCost(setCost) {
        expenseCost = Number(setCost.expenseCost);


    }


    function getExpenses() {
        return {
            expenseList
            // rentCost,
            // transportCost,
            // groceryCost,
            // budgetAmount
        }


    }

    function getCost() {
        return {
            expenseCost
        }

    }

    // function makeChanges (additions){
    //     let cost = 0;

    //     if (additions === "rent") {
    //         cost = rentCost

    //     }
    //     if (additions === "transport") {
    //         cost = transportCost
    //     }

    //     else if (additions === "grocery") {
    //         cost = groceryCost
    //     }

    //     expenseList.push({
    //         variety: additions,
    //         cost,

    //     });


    // }

    //     function changes (){
    //         return expenseList
    //     }

    //     function getTotal(variety) {
    //         return expenseList.reduce((total, additions) => {
    //             let val = additions.variety === variety ? additions.cost : 0;
    //             return total + val;
    //         }, 0);
    //     }

    // function totalExpenses() {
    //     return getTotal('rentCost') + getTotal('transportCost') + getTotal('groceryCost');
    // }

    function totals(expenseAmount) {
        let cost = 0;

        if (expenseAmount === Number) {


            // let rentTotal = getTotal('rentCost').toFixed(2);
            // let transportTotal = getTotal('transportCost').toFixed(2);
            // let groceryTotal = getTotal('groceryCost').toFixed(2);
            // return {
            //     rentTotal,
            //     transportTotal,
            //     groceryTotal,
            //     totalExpenses: totalExpenses().toFixed(2)
        }
    }



    return {
        setExpenses,
        getExpenses,
        getCost,
        setExpenseCost,
        // makeChanges,
        // changes,
        // getTotal,
        // totalExpenses,
        totals
    }



}



