const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env =require('dotenv');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const purchaseRouter = require('./routes/purchaseRoutes');
const adminRouter= require('./routes/adminRoutes')

app.use('/admin',adminRouter)

env.config();
//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// DEFINE ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/Purchases', purchaseRouter);
//CONNECT TO THE DATABASE
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.b2enk.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
 useCreateIndex: true, 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected");
});




// LISTEN to SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
