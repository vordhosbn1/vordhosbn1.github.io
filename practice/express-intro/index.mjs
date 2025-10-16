import express from 'express';
const quotes = (await import("success-motivational-quotes")).default;
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));



// routes
// root route
app.get('/', (req, res) => {
      let famousQuote = quotes.getTodaysQuote()
   console.log(quotes.getTodaysQuote());
   res.render('home.ejs', {famousQuote})
});


// starts the web server
app.listen(3000, () => {
   console.log('server started');
});