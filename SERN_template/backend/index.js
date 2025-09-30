const express = require("express");
const app = express();
const authorRouter = require('./routes/authorRouter')
const indexRouter = require('./routes/indexRouter')
const testRouter = require('./routes/test')

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies  
app.use(express.urlencoded({ extended: true }));

app.use('/authors', authorRouter);
app.use('/', indexRouter)
app.use('/api/test', testRouter)


const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
