
const productController = require('../controllers/product.controller');
module.exports=app=>{

    app.get("/api/ALLproducts/", productController.GetAllProduct);

    app.post("/api/product/new/" , productController.CreateProduct);

    app.get("/api/Allproducts/:idd" , productController.GetProduct);

    app.put('/api/ALLproducts/update/:id',productController.UpdateProduct );

    app.delete("/api/Allproducts/delete/:id", productController.DeleteProduct);


};
