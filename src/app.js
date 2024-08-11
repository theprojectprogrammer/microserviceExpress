const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');
app.use('/',routes);

app.get('/', (req, res) => {
  res.send('App is live!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})