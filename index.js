const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const bodyParser = require('body-parser');

// const budget = require('./budget');

// const budgetting = budget();

app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts'
}));



function BudgetService (income) {

	const budget = {
		income,
		available : 0,
		items : [],
		amountLeft : income,
		total : 0
	}

	//
	function addExpense(expense) {
		budget.total += expense.cost;
		budget.amountLeft -= expense.cost;
		budget.items.push(expense);
	}

	function getBudget(id) {
		return budget
	}

	return {
		addExpense,
		getBudget,
	}

}


app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add  this line


const budgetService = BudgetService(3500);

app.get('/', function (req, res) {

	res.render('index', {
		budget: budgetService.getBudget()
	});


});


app.post('/budget', function (req, res) {


	console.log(req.body);

	const budgetItem = {
		name : req.body.expenseName,
		cost : Number(req.body.cost)
	};

	budgetService.addExpense(budgetItem);


	// budgetting.setExpenses(expense)
		// rentCost: req.body.rentCost,
		// groceryCost: req.body.groceryCost,
		// transportCost: req.body.transportCost,

	// console.log(budgetting.getExpenses());

	res.redirect("/")


});

















const PORT = process.env.PORT || 3025;
app.listen(PORT, function () {
	console.log('App started at port:', PORT);
})