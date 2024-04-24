const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
app.use(morgan('combined'));
app.get('/', (req, res) => {
    const a =1;
    const b=2;
    const c=a+b;
  res.send(`<h1>Hello World!</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})