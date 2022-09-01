
const AuthorController = require('../controllers/Authors.controller');

module.exports=app=>{

    app.get("/", AuthorController.GetAllAuthor);

    app.post("/new/" , AuthorController.createauthor);

    app.delete('/delete/:id',AuthorController.DeleteAuthor); 

    app.put('/edit/:id', AuthorController.UpdateAuthor)

    

};