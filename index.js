const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"


async function connectToDataBase() {
  try {
  await mongoose.connect(MONGODB_URI); 

   /*const recipe1 = {
    title: "Chicken Thighs",
    level: "Amateur Chef",
    ingredients: [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
      "3 tablespoons Asian chili garlic sauce",
      "3 tablespoons minced garlic",
      "salt to taste",
      "8 skinless, boneless chicken thighs",
    ],
    cuisine: "Asian",
    dishType: "main_course",
    image:
      "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    duration: 40,
    creator: "Chef LePapu",
  }; */

  //const newRecipe =  Recipe.create(recipe1);
  //console.log(recipe1.title);

  //const newRecipes = await Recipe.insertMany(data);
  //return console.log(data.title);

 /*await Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"},
  {duration: 100},
  {new: true}); */
  //console.log("Success");

  //await Recipe.deleteOne({title: "Carrot Cake"});
  //console.log("Recipe deleted");
  
  mongoose.disconnect();
  (console.log("Disconnected"));
  }
   catch (error) {
  console.error('Error connecting to the database', error);
}
}


connectToDataBase();

