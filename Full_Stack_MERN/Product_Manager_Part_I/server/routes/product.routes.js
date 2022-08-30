

const productController = require('../controllers/product.controller');


module.exports=app=>{
    
app.post("/api/product/new" , productController.CreateProduct);


app.post("/api/product/all" , productController.GetAllProduct);


}