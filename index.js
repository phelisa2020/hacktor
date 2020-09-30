const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const bodyParser = require('body-parser');

const budget = require('./budget');

const budgetting = budget();




app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts'


}));



app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add  this line


app.get('/', function (req, res) {

	res.render('index', {

		budget: budgetting.getExpenses(),
		totals: budgetting.totals(),




	});


});

app.post('/budget', function (req, res) {

	budgetting.setExpenses({

		rentCost: req.body.rentCost,
		groceryCost: req.body.groceryCost,
		transportCost: req.body.transportCost,


	});

	console.log(budgetting.totalExpenses());

	res.redirect('/');


});

















const PORT = process.env.PORT || 3025;
app.listen(PORT, function () {
	console.log('App started at port:', PORT);
})