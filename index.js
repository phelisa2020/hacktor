const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const bodyParser = require('body-parser');

// const budget = require('./budget');

// const budgetting = budget();




app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts'


}));



function BudgetService () {

	const budget = {
		income : 0,
		available : 0,
		items : [],
		total : 0
	}

	//
	function addExpense(expense) {
		budget.total += budgetItem.cost;
		budget.items.push(budgetItem);
	}

	function getBudget(id) {
		return budget
	}

	return {
		addExpense,
		getBudget,
		BudgetService
	}

}


app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add  this line


app.get('/', function (req, res) {

	res.render('index', {
		budget
	});


});


app.post('/budget', function (req, res) {


	console.log(req.body);

	const budgetItem = {
		name : req.body.expenseName,
		cost : Number(req.body.cost)
	};

	


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