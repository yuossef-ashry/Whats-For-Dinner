// ==================== START DOM ELEMENTS SELECTION ====================
var recipeTitle = document.getElementById("recipeTitle");
var recipeDesc = document.getElementById("recipeDesc");
var recipeImage = document.getElementById("recipeImage");
var rating = document.getElementById("rating");
var reviews = document.getElementById("reviews");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servings = document.getElementById("servings");
var difficulty = document.getElementById("difficulty");
var cuisine = document.getElementById("cuisine");
var calories = document.getElementById("calories");
var protein = document.getElementById("protein");
var carbohydrates = document.getElementById("carbohydrates");
var fat = document.getElementById("fat");
var fiber = document.getElementById("fiber");
var sodium = document.getElementById("sodium");
var ingredientsList = document.querySelector("#ingredients ol");
var instructionsList = document.querySelector("#instructions ol");
var chefTips = document.getElementById("chef");
// ==================== END DOM ELEMENTS SELECTION ====================

// ==================== START RECIPES DATA ARRAY ====================
var recipes = [
  // ==================== START RECIPE 1: CLASSIC BEEF BURGER ====================
  {
    title: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings.",
    image: "images/burger.avif",
    rating: 4.6,
    reviews: 421,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    cuisine: "American",
    nutrition: {
      calories: 650,
      protein: 38,
      carbohydrates: 42,
      fat: 35,
      fiber: 2,
      sodium: 920,
    },
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    chefTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  // ==================== END RECIPE 1: CLASSIC BEEF BURGER ====================

  // ==================== START RECIPE 2: CREAMY CHICKEN PASTA ====================
  {
    title: "Creamy Chicken Pasta",
    description: "Rich creamy pasta with grilled chicken.",
    image: "images/carbonara.avif",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    nutrition: {
      calories: 520,
      protein: 28,
      carbohydrates: 62,
      fat: 18,
      fiber: 3,
      sodium: 680,
    },
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    chefTips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  // ==================== END RECIPE 2: CREAMY CHICKEN PASTA ====================

  // ==================== START RECIPE 3: CHICKEN TIKKA MASALA ====================
  {
    title: "Chicken Tikka Masala",
    description:
      "Tender grilled chicken simmered in a rich, creamy tomato curry sauce with aromatic Indian spices.",
    image: "images/masala.avif",
    rating: 4.9,
    reviews: 874,
    prepTime: 20,
    cookTime: 50,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
    nutrition: {
      calories: 620,
      protein: 42,
      carbohydrates: 18,
      fat: 39,
      fiber: 4,
      sodium: 790,
    },
    ingredients: [
      "700g boneless chicken thighs",
      "1 cup plain yogurt",
      "2 tbsp tikka masala spice mix",
      "2 tbsp butter",
      "1 onion, finely chopped",
      "3 garlic cloves, minced",
      "1 tbsp grated ginger",
      "400g tomato puree",
      "1/2 cup heavy cream",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate the chicken in yogurt and tikka masala spices for at least 30 minutes.",
      "Grill or pan-sear the chicken until lightly charred.",
      "Sauté onion, garlic, and ginger in butter until soft.",
      "Add tomato puree and simmer for 10 minutes.",
      "Stir in heavy cream and return chicken to the sauce.",
      "Cook for another 15 minutes and garnish with cilantro before serving.",
    ],
    chefTips: [
      "Marinate overnight for maximum flavor.",
      "Use chicken thighs for extra juiciness.",
      "Serve with basmati rice or warm naan bread.",
      "Add a little chili powder for extra heat.",
    ],
  },
  // ==================== END RECIPE 3: CHICKEN TIKKA MASALA ====================

  // ==================== START RECIPE 4: CHICKEN STIR-FRY ====================
  {
    title: "Chicken Stir-Fry",
    description:
      "Quick and colorful chicken stir-fry loaded with crisp vegetables in a savory garlic soy sauce.",
    image: "images/stir-fry.avif",
    rating: 4.7,
    reviews: 536,
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Asian",
    nutrition: {
      calories: 430,
      protein: 36,
      carbohydrates: 24,
      fat: 18,
      fiber: 5,
      sodium: 670,
    },
    ingredients: [
      "500g chicken breast, sliced",
      "1 broccoli head",
      "1 red bell pepper",
      "1 yellow bell pepper",
      "2 carrots",
      "2 garlic cloves",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sesame oil",
      "1 tbsp vegetable oil",
    ],
    instructions: [
      "Heat oil in a wok over high heat.",
      "Cook chicken until golden, then remove.",
      "Stir-fry vegetables for 4-5 minutes.",
      "Add garlic and cook for 30 seconds.",
      "Return chicken to the pan.",
      "Pour in soy sauce, oyster sauce, and sesame oil.",
      "Toss everything together and serve immediately.",
    ],
    chefTips: [
      "Keep vegetables slightly crisp.",
      "Slice chicken evenly for quick cooking.",
      "Cook on high heat for authentic stir-fry flavor.",
      "Serve over steamed jasmine rice.",
    ],
  },
  // ==================== END RECIPE 4: CHICKEN STIR-FRY ====================

  // ==================== START RECIPE 5: TERIYAKI CHICKEN BOWL ====================
  {
    title: "Teriyaki Chicken Bowl",
    description:
      "Sweet and savory teriyaki chicken served over fluffy rice with fresh vegetables.",
    image: "images/teriyaki.avif",
    rating: 4.8,
    reviews: 689,
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Japanese",
    nutrition: {
      calories: 560,
      protein: 34,
      carbohydrates: 52,
      fat: 20,
      fiber: 6,
      sodium: 810,
    },
    ingredients: [
      "500g chicken thighs",
      "2 cups cooked jasmine rice",
      "1 cup broccoli florets",
      "1 carrot, sliced",
      "1 cup edamame",
      "1/3 cup teriyaki sauce",
      "1 tbsp sesame seeds",
      "2 green onions",
    ],
    instructions: [
      "Cook chicken until golden brown.",
      "Pour teriyaki sauce over the chicken and simmer until glazed.",
      "Steam broccoli, carrots, and edamame.",
      "Divide rice among serving bowls.",
      "Top with chicken and vegetables.",
      "Sprinkle with sesame seeds and chopped green onions before serving.",
    ],
    chefTips: [
      "Use homemade teriyaki sauce for richer flavor.",
      "Don't overcook the vegetables.",
      "Add avocado for extra creaminess.",
      "Finish with a drizzle of sriracha if you like spicy food.",
    ],
  },
  // ==================== END RECIPE 5: TERIYAKI CHICKEN BOWL ====================

  // ==================== START RECIPE 6: SHRIMP SCAMPI ====================
  {
    title: "Shrimp Scampi",
    description:
      "Juicy shrimp tossed in a buttery garlic lemon sauce served over linguine pasta.",
    image: "images/shrimp.avif",
    rating: 4.8,
    reviews: 573,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    nutrition: {
      calories: 540,
      protein: 33,
      carbohydrates: 45,
      fat: 24,
      fiber: 3,
      sodium: 690,
    },
    ingredients: [
      "500g large shrimp, peeled and deveined",
      "300g linguine pasta",
      "4 garlic cloves, minced",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "1 lemon, juiced",
      "Fresh parsley, chopped",
      "Salt and black pepper",
      "Parmesan cheese (optional)",
    ],
    instructions: [
      "Cook linguine according to package instructions.",
      "Season shrimp with salt and pepper.",
      "Heat butter and olive oil in a large skillet.",
      "Cook garlic until fragrant, then add shrimp.",
      "Cook shrimp for 2 minutes per side.",
      "Stir in lemon juice and parsley.",
      "Toss with cooked pasta and serve immediately.",
    ],
    chefTips: [
      "Avoid overcooking shrimp.",
      "Use freshly squeezed lemon juice.",
      "Reserve a little pasta water for a silkier sauce.",
      "Serve immediately while hot.",
    ],
  },
  // ==================== END RECIPE 6: SHRIMP SCAMPI ====================

  // ==================== START RECIPE 7: CAPRESE SANDWICH ====================
  {
    title: "Caprese Sandwich",
    description:
      "A fresh Italian sandwich layered with mozzarella, tomatoes, basil, and pesto.",
    image: "images/caprese.avif",
    rating: 4.6,
    reviews: 321,
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "Easy",
    cuisine: "Italian",
    nutrition: {
      calories: 420,
      protein: 17,
      carbohydrates: 34,
      fat: 23,
      fiber: 3,
      sodium: 560,
    },
    ingredients: [
      "2 ciabatta rolls",
      "Fresh mozzarella",
      "2 tomatoes, sliced",
      "Fresh basil leaves",
      "2 tbsp pesto sauce",
      "Olive oil",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Slice the ciabatta rolls in half.",
      "Spread pesto on both sides.",
      "Layer mozzarella, tomatoes, and basil.",
      "Season with salt and pepper.",
      "Drizzle with olive oil.",
      "Grill for 3-5 minutes until lightly toasted.",
    ],
    chefTips: [
      "Use ripe tomatoes.",
      "Fresh mozzarella gives the best flavor.",
      "Serve warm for the perfect texture.",
    ],
  },
  // ==================== END RECIPE 7: CAPRESE SANDWICH ====================

  // ==================== START RECIPE 8: GREEK MOUSSAKA ====================
  {
    title: "Greek Moussaka",
    description:
      "Traditional Greek casserole layered with eggplant, seasoned beef, and creamy béchamel sauce.",
    image: "images/moussaka.avif",
    rating: 4.9,
    reviews: 741,
    prepTime: 35,
    cookTime: 60,
    servings: 6,
    difficulty: "Hard",
    cuisine: "Greek",
    nutrition: {
      calories: 690,
      protein: 36,
      carbohydrates: 29,
      fat: 46,
      fiber: 6,
      sodium: 840,
    },
    ingredients: [
      "2 eggplants",
      "500g ground beef",
      "1 onion, chopped",
      "3 garlic cloves",
      "400g crushed tomatoes",
      "Olive oil",
      "2 cups béchamel sauce",
      "100g grated Parmesan cheese",
      "Salt",
      "Black pepper",
      "Ground cinnamon",
    ],
    instructions: [
      "Slice and roast the eggplants until tender.",
      "Cook onion, garlic, and ground beef.",
      "Add tomatoes and cinnamon, then simmer.",
      "Layer eggplant and meat sauce in a baking dish.",
      "Top with béchamel sauce and Parmesan.",
      "Bake at 180°C (350°F) for 45 minutes until golden.",
      "Let rest for 15 minutes before serving.",
    ],
    chefTips: [
      "Allow the moussaka to rest before slicing.",
      "Roast the eggplant instead of frying for a lighter dish.",
      "Freshly grated Parmesan adds richer flavor.",
      "Even better the next day.",
    ],
  },
  // ==================== END RECIPE 8: GREEK MOUSSAKA ====================

  // ==================== START RECIPE 9: FRENCH ONION SOUP ====================
  {
    title: "French Onion Soup",
    description:
      "A comforting French classic made with caramelized onions, rich beef broth, and toasted cheese-covered bread.",
    image: "images/soup.avif",
    rating: 4.8,
    reviews: 492,
    prepTime: 20,
    cookTime: 55,
    servings: 4,
    difficulty: "Medium",
    cuisine: "French",
    nutrition: {
      calories: 410,
      protein: 16,
      carbohydrates: 32,
      fat: 22,
      fiber: 4,
      sodium: 930,
    },
    ingredients: [
      "4 large onions, thinly sliced",
      "2 tbsp butter",
      "1 tbsp olive oil",
      "4 cups beef broth",
      "1 cup dry white wine",
      "1 baguette",
      "200g Gruyère cheese",
      "2 garlic cloves",
      "Fresh thyme",
      "Salt and black pepper",
    ],
    instructions: [
      "Melt butter with olive oil in a large pot.",
      "Slowly caramelize onions for about 35 minutes.",
      "Add garlic and cook for 1 minute.",
      "Pour in white wine and simmer until reduced.",
      "Add beef broth and thyme, then simmer for 20 minutes.",
      "Toast baguette slices.",
      "Ladle soup into oven-safe bowls, top with bread and cheese.",
      "Broil until cheese is bubbly and golden.",
    ],
    chefTips: [
      "Be patient while caramelizing onions.",
      "Use Gruyère cheese for authentic flavor.",
      "Serve immediately while the cheese is melted.",
      "Fresh thyme adds wonderful aroma.",
    ],
  },
  // ==================== END RECIPE 9: FRENCH ONION SOUP ====================

  // ==================== START RECIPE 10: LASAGNA BOLOGNESE ====================
  {
    title: "Lasagna Bolognese",
    description:
      "Layers of fresh pasta, rich beef Bolognese sauce, creamy béchamel, and melted cheese.",
    image: "images/lasagna.avif",
    rating: 4.9,
    reviews: 1238,
    prepTime: 35,
    cookTime: 65,
    servings: 8,
    difficulty: "Hard",
    cuisine: "Italian",
    nutrition: {
      calories: 720,
      protein: 38,
      carbohydrates: 48,
      fat: 42,
      fiber: 5,
      sodium: 980,
    },
    ingredients: [
      "12 lasagna sheets",
      "600g ground beef",
      "1 onion, chopped",
      "2 garlic cloves",
      "500g tomato sauce",
      "2 cups béchamel sauce",
      "300g mozzarella cheese",
      "100g Parmesan cheese",
      "Olive oil",
      "Italian seasoning",
    ],
    instructions: [
      "Cook onion and garlic until soft.",
      "Brown the ground beef.",
      "Add tomato sauce and simmer for 30 minutes.",
      "Spread a thin layer of sauce in a baking dish.",
      "Layer pasta, meat sauce, béchamel, and cheese.",
      "Repeat layers until ingredients are used.",
      "Bake at 180°C (350°F) for 45 minutes.",
      "Let rest for 15 minutes before slicing.",
    ],
    chefTips: [
      "Resting the lasagna makes slicing easier.",
      "Use freshly grated Parmesan.",
      "Don't overload each layer.",
      "Tastes even better the next day.",
    ],
  },
  // ==================== END RECIPE 10: LASAGNA BOLOGNESE ====================

  // ==================== START RECIPE 11: PAD THAI ====================
  {
    title: "Pad Thai",
    description:
      "Thailand's famous stir-fried rice noodles with shrimp, peanuts, vegetables, and tangy tamarind sauce.",
    image: "images/pad.avif",
    rating: 4.8,
    reviews: 816,
    prepTime: 20,
    cookTime: 18,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Thai",
    nutrition: {
      calories: 560,
      protein: 29,
      carbohydrates: 58,
      fat: 22,
      fiber: 5,
      sodium: 760,
    },
    ingredients: [
      "250g rice noodles",
      "300g shrimp",
      "2 eggs",
      "Bean sprouts",
      "Green onions",
      "Crushed peanuts",
      "2 tbsp fish sauce",
      "2 tbsp tamarind paste",
      "1 tbsp brown sugar",
      "Lime wedges",
    ],
    instructions: [
      "Soak rice noodles according to package instructions.",
      "Cook shrimp until pink, then set aside.",
      "Scramble eggs in the wok.",
      "Add noodles with fish sauce, tamarind, and sugar.",
      "Return shrimp and toss everything together.",
      "Add bean sprouts and green onions.",
      "Top with crushed peanuts and serve with lime wedges.",
    ],
    chefTips: [
      "Prepare all ingredients before cooking.",
      "Cook over high heat.",
      "Don't over-soak the noodles.",
      "Serve with extra lime for authentic flavor.",
    ],
  },
  // ==================== END RECIPE 11: PAD THAI ====================

  // ==================== START RECIPE 12: VEGETABLE CURRY ====================
  {
    title: "Vegetable Curry",
    description:
      "A hearty mix of fresh vegetables simmered in a creamy coconut curry sauce packed with warm spices.",
    image: "images/curry.avif",
    rating: 4.7,
    reviews: 518,
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Indian",
    nutrition: {
      calories: 410,
      protein: 10,
      carbohydrates: 46,
      fat: 21,
      fiber: 9,
      sodium: 620,
    },
    ingredients: [
      "2 potatoes, diced",
      "1 carrot, sliced",
      "1 cup cauliflower florets",
      "1 cup peas",
      "1 onion, chopped",
      "3 garlic cloves, minced",
      "1 tbsp grated ginger",
      "400ml coconut milk",
      "2 tbsp curry powder",
      "1 tbsp vegetable oil",
      "Fresh cilantro",
    ],
    instructions: [
      "Heat oil and sauté onion, garlic, and ginger.",
      "Add curry powder and cook for 1 minute.",
      "Stir in potatoes, carrots, and cauliflower.",
      "Pour in coconut milk and simmer for 25 minutes.",
      "Add peas and cook for another 5 minutes.",
      "Garnish with cilantro and serve with rice.",
    ],
    chefTips: [
      "Use full-fat coconut milk for a richer sauce.",
      "Add chickpeas for extra protein.",
      "Serve with warm naan bread.",
      "Adjust spice level with chili flakes.",
    ],
  },
  // ==================== END RECIPE 12: VEGETABLE CURRY ====================

  // ==================== START RECIPE 13: CAESAR SALAD ====================
  {
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and Parmesan cheese.",
    image: "images/cesar.avif",
    rating: 4.6,
    reviews: 402,
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: "Easy",
    cuisine: "American",
    nutrition: {
      calories: 350,
      protein: 14,
      carbohydrates: 18,
      fat: 24,
      fiber: 4,
      sodium: 540,
    },
    ingredients: [
      "1 large romaine lettuce",
      "1 cup croutons",
      "50g Parmesan cheese",
      "2 tbsp Caesar dressing",
      "1 chicken breast (optional)",
      "Black pepper",
      "Lemon wedges",
    ],
    instructions: [
      "Wash and chop the lettuce.",
      "Grill and slice the chicken if using.",
      "Toss lettuce with Caesar dressing.",
      "Top with croutons and Parmesan cheese.",
      "Add grilled chicken.",
      "Serve with lemon wedges.",
    ],
    chefTips: [
      "Use freshly grated Parmesan.",
      "Add dressing just before serving.",
      "Homemade croutons taste much better.",
      "Chill the lettuce before serving.",
    ],
  },
  // ==================== END RECIPE 13: CAESAR SALAD ====================

  // ==================== START RECIPE 14: HONEY GARLIC SALMON ====================
  {
    title: "Honey Garlic Salmon",
    description:
      "Perfectly seared salmon glazed with a sweet and savory honey garlic sauce.",
    image: "images/salmon.avif",
    rating: 4.9,
    reviews: 786,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    cuisine: "American",
    nutrition: {
      calories: 480,
      protein: 39,
      carbohydrates: 16,
      fat: 28,
      fiber: 1,
      sodium: 640,
    },
    ingredients: [
      "4 salmon fillets",
      "3 garlic cloves, minced",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp butter",
      "1 tbsp olive oil",
      "Lemon slices",
      "Fresh parsley",
    ],
    instructions: [
      "Season salmon with salt and pepper.",
      "Heat olive oil and sear salmon for 4 minutes per side.",
      "Remove salmon from the pan.",
      "Cook garlic in butter for 30 seconds.",
      "Add honey and soy sauce.",
      "Return salmon and coat with the glaze.",
      "Serve with parsley and lemon.",
    ],
    chefTips: [
      "Don't overcook the salmon.",
      "Fresh garlic gives the best flavor.",
      "Serve with rice or roasted vegetables.",
      "Spoon extra sauce over the salmon before serving.",
    ],
  },
  // ==================== END RECIPE 14: HONEY GARLIC SALMON ====================

  // ==================== START RECIPE 15: MARGHERITA PIZZA ====================
  {
    title: "Margherita Pizza",
    description:
      "Classic Italian pizza topped with tomato sauce, fresh mozzarella, basil, and olive oil.",
    image: "images/pizza.avif",
    rating: 4.8,
    reviews: 915,
    prepTime: 25,
    cookTime: 18,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Italian",
    nutrition: {
      calories: 590,
      protein: 22,
      carbohydrates: 62,
      fat: 28,
      fiber: 3,
      sodium: 710,
    },
    ingredients: [
      "1 pizza dough",
      "150g tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Preheat oven to 250°C (480°F).",
      "Roll out the pizza dough.",
      "Spread tomato sauce evenly.",
      "Add sliced mozzarella.",
      "Bake for 12-15 minutes until golden.",
      "Top with fresh basil and drizzle with olive oil before serving.",
    ],
    chefTips: [
      "Use fresh mozzarella for authentic flavor.",
      "Bake on a pizza stone if available.",
      "Don't overload the pizza with toppings.",
      "Add basil after baking to keep it fresh.",
    ],
  },
  // ==================== END RECIPE 15: MARGHERITA PIZZA ====================
];
// ==================== END RECIPES DATA ARRAY ====================

// ==================== START HELPER FUNCTIONS ====================
function randomRecipe() {
  var recipe = recipes[Math.floor(Math.random() * recipes.length)];
  return recipe;
}
// ==================== END HELPER FUNCTIONS ====================

// ==================== START MAIN RECIPE DISPLAY FUNCTION ====================
function antherRecipe() {
  var recipe = randomRecipe();
  var extra = document.querySelector(".extra");

  if (recipe.cookTime > 45) {
    extra.classList.remove("d-none");
    extra.classList.add("d-flex");
  } else {
    extra.classList.remove("d-flex");
    extra.classList.add("d-none");
  }

  recipeTitle.innerHTML = recipe.title;
  recipeDesc.innerHTML = recipe.description;
  recipeImage.src = recipe.image;
  rating.innerHTML = recipe.rating;
  reviews.innerHTML = recipe.reviews;
  prepTime.innerHTML = recipe.prepTime;
  cookTime.innerHTML = recipe.cookTime;
  servings.innerHTML = recipe.servings;
  difficulty.innerHTML = recipe.difficulty;
  cuisine.innerHTML = recipe.cuisine;
  calories.innerHTML = recipe.nutrition.calories;
  protein.innerHTML = recipe.nutrition.protein;
  carbohydrates.innerHTML = recipe.nutrition.carbohydrates;
  fat.innerHTML = recipe.nutrition.fat;
  fiber.innerHTML = recipe.nutrition.fiber;
  sodium.innerHTML = recipe.nutrition.sodium;

  ingredientsList.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredientsList.innerHTML += `
    <li>${recipe.ingredients[i]}</li>
  `;
  }

  instructionsList.innerHTML = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    instructionsList.innerHTML += `
    <li>${recipe.instructions[i]}</li>
  `;
  }

  chefTips.innerHTML = "";
  for (var i = 0; i < recipe.chefTips.length; i++) {
    chefTips.innerHTML += `
    <div class="chef-card mb-3 rounded-4 p-3 d-flex align-items-baseline">
      <i class="fa-solid fa-check me-2"></i> 
      <p>${recipe.chefTips[i]}</p>
    </div>
  `;
  }
}
// ==================== END MAIN RECIPE DISPLAY FUNCTION ====================

// ==================== START INITIAL APP LOAD ====================
antherRecipe();
// ==================== END INITIAL APP LOAD ====================