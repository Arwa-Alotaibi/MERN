///////
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

//Create 2 classes: User, Company with the same attributes as listed above

class User{
  constructor(){
      this.id = faker.datatype.uuid(),
      this.firstName= faker.name.firstName(),
      this.lastName = faker.name.lastName(),
      this.phoneNumber = faker.phone.number(),
      this.email = faker.internet.email(),
      this.password=faker.internet.password()
}}

class Company{
  constructor(){
    this.id = faker.datatype.uuid(),
    this.name= faker.company.name(),
    this.address={
      street :faker.address.street(),
      city:faker.address.city(),
      state : faker.address.state(),
      zipCode :faker.address.zipCode(),
      country:faker.address.country()


}}}





 const newusers =[
   {id:1 ,firstname : 'arwa ', lastName:'alotaibi' ,phoneNumber:0000000 , email : 'arwa@gmail.com' , password:11111110 },

  {id:2 ,firstname : 'eman ', lastName:'alotaibi' ,phoneNumber:1111111 , email : 'eman@gmail.com' , password:00000001 },
   {id:3 ,firstname : 'alanoud ', lastName:'alotaibi' ,phoneNumber:222222 , email : 'alanoud@gmail.com' , password:2222221 },
]

app.get("/api/users", (req, res) => {
  res.json( newusers);
});




// const newCompanys =[
//   {id:1 ,name : 'companyname ' , address:{street:0000000   , city:'riyadh' , state:KSA ,zipCode:11 , country:'riyadh' }},

// ];






//Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
  new_user =  new User()
  res.json(new_user );
});

//Create an api route "/api/companies/new" that returns a new company

app.get("/api/companies/new", (req, res) => {
  new_company = new Company()
  res.json(new_company);
});

//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {

  const all_user = new User()

  const all_company= new Company()
  

  res.json( {all_user , all_company} );


});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

