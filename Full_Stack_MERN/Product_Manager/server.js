const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;



app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");

const AllMyProductRotes = require("./server/routes/product.routes");

AllMyProductRotes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );