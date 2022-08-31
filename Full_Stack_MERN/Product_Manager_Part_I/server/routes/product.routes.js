

const productController = require('../controllers/product.controller');


module.exports=app=>{
    
app.post("/api/product/new" , productController.CreateProduct);


app.Get("/api/product/all" , productController.GetAllProduct);


}