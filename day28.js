const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use((req, res, next) => {
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.url;

  console.log(`[${timestamp}] ${method} ${url}`);
  next(); 
});


let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  
];


app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Something went wrong.' });
});
app.get('/nonexistent', (req, res, next) => {
  

  next(new Error('This route does not exist.'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
