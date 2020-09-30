module.exports = function budget() {

    let expenseList = [];
    let expenseCost;


    function setExpenses(expense) {
        if (expenseList[expense] === undefined) {
            expenseList[expense] = 0
        }
        expenseList[expense] += 1
       
    }

    function setExpenseCost(setCost) {
        expenseCost = Number(setCost.expenseCost);


    }


    function getExpenses() {
        return {
            expenseList
            
        }


    }

    function getCost() {
        return {
            expenseCost
        }

    }

    function totals(expenseAmount) {
        let cost = 0;

        if (expenseAmount === Number) {


            
        }
    }



    return {
        setExpenses,
        getExpenses,
        getCost,
        setExpenseCost,
       
        totals
    }



}



