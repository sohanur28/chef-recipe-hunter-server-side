const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Recipe Hunter is running')
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
});
app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const selectedRecipe = recipes.find( r => r.id === parseInt(id));
    res.send(selectedRecipe);
});

app.listen(port, () => {
    console.log(`Chef Recipe Hunter API is runnig on port: ${port}`)
})