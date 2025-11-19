const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

const oudRoutes = require('./routes/oud');
app.use('/oud', oudRoutes);



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
