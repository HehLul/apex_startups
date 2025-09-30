const express = require("express");
const app = express();
const authorRouter = require('./routes/authorRouter')
const indexRouter = require('./routes/indexRouter')

app.use('/authors', authorRouter);
app.use('/', indexRouter)


const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
