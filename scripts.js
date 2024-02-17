function toggleInstructions(recipeId) {
    const instructions = document.getElementById(recipeId);
    instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
}

// Sample recipe data
const recipesData = [
    { id: 'recipe1', name: 'Pasta Carbonara', image: 'images/pasta carbonara.png', ingredients: '400 grams of spaghetti, 150 grams of guanciale or pancetta (cubed or sliced), 3 large eggs, 1 cup of grated Pecorino Romano cheese, 1 clove of garlic (optional), salt, and black pepper.',instructions:'To prepare, begin by boiling the spaghetti in salted water until al dente. While the pasta cooks, sauté the guanciale or pancetta in a pan over medium heat until it turns crispy and golden. If desired, add a clove of garlic to infuse a subtle flavor, removing it before adding the pasta.In a bowl, whisk together the eggs, grated Pecorino Romano cheese, and black pepper to form a creamy mixture. Once the pasta is cooked, drain it and immediately add it to the pan with the crispy guanciale or pancetta, tossing to coat the pasta evenly with the rendered fat.Off the heat, quickly pour the egg and cheese mixture over the pasta, tossing vigorously to create a creamy, silky sauce that clings to the noodles. The residual heat from the pasta will cook the eggs, creating a luscious carbonara sauce. Season with additional black pepper to taste, and serve immediately, ensuring the dish is hot and comforting. This simple yet rich Pasta Carbonara is a delightful Italian classic thats sure to please.',Cooking_time:'30-40minutes',skill:'intermediate',servings:'4' },
    { id:'recipe2',name:'chicken alfredo',image:'images/chicken alfredo.png'},
    { id: 'recipe3', name: 'Vegetarian Stir-Fry', image: 'images/vegetarian stir-fry.png', ingredients: 'broccoli,pepper-red and yellow bell,carrot,julienned,zucchini,peas,garlic,ginger,oil,sauce', instructions: 'To prepare this delightful vegetarian stir-fry, begin by washing and chopping 2 cups of broccoli florets, slicing 1 red and 1 yellow bell pepper, julienning 1 carrot, slicing 1 zucchini, and trimming the ends of 1 cup of snap peas. In a small bowl, whisk together a flavorful sauce comprising 1/4 cup soy sauce, 2 tablespoons hoisin sauce, and 1 tablespoon sesame oil; set aside. Heat 2 tablespoons of vegetable oil in a wok or large skillet over medium-high heat. Sauté 3 cloves of minced garlic and 1 tablespoon of minced ginger until fragrant, for about 1 minute. Add the array of colorful vegetables to the wok and stir-fry for 4-5 minutes until achieving a delightful crisp-tender texture. Pour the prepared sauce over the vegetables, ensuring an even coating. Optionally, thicken the sauce by adding a mixture of 1 tablespoon cornstarch and 2 tablespoons of water. Continue cooking for an additional 2-3 minutes until the vegetables reach your desired level of doneness. Serve this vibrant and flavorful vegetarian stir-fry over a bed of cooked rice or noodles for a wholesome and satisfying meal.',Cooking_time:'30-40minutes',skill:'intermediate',servings:'4'},
    { id: 'recipe4', name: 'Grilled Salmon', image: 'images/grilled salmon.png', ingredients: 'four salmon fillets, each weighing about 6 ounces. Create a flavorful marinade by whisking together 2 tablespoons of olive oil, 2 tablespoons of soy sauce, 2 tablespoons of lemon juice, 2 cloves of minced garlic, 1 teaspoon of Dijon mustard, 1 teaspoon of honey, and a sprinkle of salt and black pepper.', instructions: 'Place the salmon fillets in a shallow dish or a resealable plastic bag, ensuring an even coating with the marinade. Allow the salmon to marinate in the refrigerator for at least 30 minutes, or for an extended period for a more robust flavor.When ready to grill, preheat your grill to medium-high heat. Remove the salmon from the marinade, letting any excess drip off. Place the salmon fillets on the preheated grill, skin side down. Grill for approximately 4-5 minutes per side, adjusting the time based on the thickness of the fillets. The salmon is ready when it easily flakes with a fork. Once grilled to perfection, garnish the salmon with fresh herbs such as chopped parsley or dill. Serve the grilled salmon with lemon wedges on the side for an added burst of citrus freshness. This delightful and healthy dish is perfect for a flavorful and satisfying meal.',Cooking_time:'30-40minutes',skill:'intermediate',servings:'4' },
    { id: 'recipe5', name: 'Chocolate Cake', image: 'images/chocolate cake.png', ingredients: 'flour,sugar,cocoa powder,baking powder and soda,salt,eggs,milk,oil,vanilla extract and boiling water', instructions: 'Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.In a large mixing bowl, sift together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.In a large mixing bowl, sift together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.Add the eggs, milk, vegetable oil, and vanilla extract to the dry ingredients. Beat on medium speed for about 2 minutes until well combined.Stir in the boiling water. The batter will be thin, but thats normal.Pour the batter evenly into the prepared pans and bake in the preheated oven for 30-35 minutes or until a toothpick inserted into the center comes out clean.Allow the cakes to cool in the pans for 10 minutes before transferring them to a wire rack to cool completely.In a medium bowl, beat the softened butter until creamy.Sift in the powdered sugar and cocoa powder, and beat until smooth.Add the vanilla extract and milk, adjusting the consistency as needed to achieve a spreadable frosting.Once the cakes are completely cooled, frost the top of one cake layer, place the second layer on top, and frost the entire cake.',Cooking_time:'30-40minutes',skill:'intermediate',servings:'4' },
];

// Populate recipes section
const recipesSection = document.getElementById('recipesSection');
recipesData.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';
    recipeDiv.onclick = () => toggleInstructions(recipe.id);

    recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <div id="${recipe.id}" class="instructions">
            <p>Ingredients: ${recipe.ingredients}</p>
            <p>Instructions: ${recipe.instructions}</p>
            <p>servings:${recipe.Cooking_time}</p>
            <p>skill:${recipe.skill}</p>
            <p>servings:${recipe.servings}</p>
        </div>
    `;

    recipesSection.appendChild(recipeDiv);
});
