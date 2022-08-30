
const jokeController = require('../controllers/jokes.controller');

module.exports=app=>{
    app.get("/api/jokes" , jokeController.GetAlljokes);

    app.get("/api/jokes/:_id" , jokeController.GetSingleJoke);

    app.get("/api/jokes/random",   jokeController.GetRandom);

    app.post("/api/jokes/new" , jokeController.CreateNewJoke);

    app.put("/api/jokes/update/:_id", jokeController.UpdateJoke);


    app.delete("/api/jokes/delete/:_id", jokeController.deletejoke);







}
