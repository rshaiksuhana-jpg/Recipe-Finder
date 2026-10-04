
let recipes = [
    {
        id: 1,
        name: "Creamy Tomato Pasta",
        category: "Dinner",
        time: "25 min",
        emoji: "🍝",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        description: "Creamy, comforting pasta with fresh herbs.",
        ingredients: [
            "200g pasta",
            "2 tomatoes",
            "2 tbsp cream",
            "2 garlic cloves",
            "Salt, pepper and olive oil"
        ],
        instructions: [
            "Boil the pasta according to the packet instructions.",
            "Heat oil and cook chopped garlic and tomatoes.",
            "Add cream, salt and pepper to the sauce.",
            "Mix in the cooked pasta and serve warm."
        ]
    },
    {
        id: 2,
        name: "Cheesy Pizza",
        category: "Dinner",
        time: "30 min",
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        description: "A delicious pizza loaded with cheese.",
        ingredients: [
            "1 pizza base",
            "1/2 cup pizza sauce",
            "1 cup mozzarella cheese",
            "Capsicum and onion",
            "Italian herbs"
        ],
        instructions: [
            "Spread pizza sauce over the base.",
            "Add cheese and chopped vegetables.",
            "Bake according to the pizza base instructions until golden.",
            "Sprinkle herbs and enjoy."
        ]
    },
    {
        id: 3,
        name: "Fluffy Pancakes",
        category: "Breakfast",
        time: "15 min",
        emoji: "🥞",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
        description: "Soft pancakes perfect for a sweet morning.",
        ingredients: [
            "1 cup flour",
            "1 cup milk",
            "1 egg",
            "1 tbsp sugar",
            "1 tsp baking powder"
        ],
        instructions: [
            "Mix flour, sugar and baking powder.",
            "Add milk and egg, then stir until combined.",
            "Pour some batter into a lightly greased pan.",
            "Cook both sides until golden and serve."
        ]
    },
    {
        id: 4,
        name: "Fresh Garden Salad",
        category: "Lunch",
        time: "10 min",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        description: "A refreshing salad packed with colorful vegetables.",
        ingredients: [
            "1 cucumber",
            "2 tomatoes",
            "1 carrot",
            "Lettuce leaves",
            "Lemon juice, salt and pepper"
        ],
        instructions: [
            "Wash all vegetables thoroughly.",
            "Chop the vegetables into small pieces.",
            "Mix everything in a large bowl.",
            "Add lemon juice, salt and pepper before serving."
        ]
    },
    {
        id: 5,
        name: "Classic Veggie Burger",
        category: "Lunch",
        time: "20 min",
        emoji: "🍔",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        description: "A satisfying burger with a crispy veggie patty.",
        ingredients: [
            "2 burger buns",
            "2 veggie patties",
            "Lettuce leaves",
            "Tomato and onion slices",
            "Cheese and your favorite sauce"
        ],
        instructions: [
            "Cook the veggie patties until golden.",
            "Toast the burger buns lightly.",
            "Spread sauce on each bun.",
            "Add lettuce, patty, vegetables and cheese."
        ]
    },
    {
        id: 6,
        name: "Chocolate Cake",
        category: "Dessert",
        time: "45 min",
        emoji: "🍰",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
        description: "A rich chocolate treat for sweet lovers.",
        ingredients: [
            "1 cup flour",
            "1/2 cup cocoa powder",
            "3/4 cup sugar",
            "2 eggs",
            "1/2 cup milk"
        ],
        instructions: [
            "Preheat the oven to the temperature required by your recipe.",
            "Mix the flour, cocoa powder and sugar.",
            "Add eggs and milk, then mix until smooth.",
            "Pour into a prepared cake tin and bake until cooked through."
        ]
    },
    {
        id: 7,
        name: "Fruit Yogurt Bowl",
        category: "Breakfast",
        time: "5 min",
        emoji: "🍓",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
        description: "A quick, colorful bowl of fruit and yogurt.",
        ingredients: [
            "1 cup yogurt",
            "1 banana",
            "Strawberries",
            "Blueberries",
            "Granola or nuts"
        ],
        instructions: [
            "Add yogurt to a bowl.",
            "Slice the banana and strawberries.",
            "Arrange the fruit over the yogurt.",
            "Top with granola or nuts and serve."
        ]
    },
    {
        id: 8,
        name: "Creamy Mushroom Pasta",
        category: "Dinner",
        time: "25 min",
        emoji: "🍄",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
        description: "A comforting pasta with mushrooms and herbs.",
        ingredients: [
            "200g pasta",
            "1 cup mushrooms",
            "2 garlic cloves",
            "1/2 cup cream",
            "Olive oil, salt and pepper"
        ],
        instructions: [
            "Boil pasta until cooked.",
            "Slice mushrooms and cook them with garlic in oil.",
            "Stir in the cream and seasonings.",
            "Add the pasta, mix well and serve."
        ]
    },
    {
        id: 9,
        name: "Strawberry Smoothie",
        category: "Breakfast",
        time: "5 min",
        emoji: "🥤",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
        description: "A cool and fruity drink for a fresh start.",
        ingredients: [
            "1 cup strawberries",
            "1 banana",
            "1 cup milk",
            "1 tsp honey (optional)"
        ],
        instructions: [
            "Wash the strawberries and remove their tops.",
            "Add strawberries, banana and milk to a blender.",
            "Add honey if you prefer extra sweetness.",
            "Blend until smooth and serve chilled."
        ]
    }
];

let selectedCategory = "All";
let favorites = [];
let favoritesOnly = false;


// Display recipe cards
function displayRecipes() {
    let searchInput = document.getElementById("searchInput");
    let recipeGrid = document.getElementById("recipeGrid");
    let emptyMessage = document.getElementById("emptyMessage");
    let recipeCount = document.getElementById("recipeCount");

    let searchText = searchInput.value.toLowerCase();

    let filteredRecipes = recipes.filter(function(recipe) {
        let matchesSearch =
            recipe.name.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText) ||
            recipe.category.toLowerCase().includes(searchText);

        let matchesCategory =
            selectedCategory === "All" ||
            recipe.category === selectedCategory;

        let matchesFavorite =
            !favoritesOnly || favorites.includes(recipe.id);

        return matchesSearch && matchesCategory && matchesFavorite;
    });

    recipeGrid.innerHTML = "";

    recipeCount.textContent = favoritesOnly
        ? filteredRecipes.length + " favorite recipes"
        : filteredRecipes.length + " recipes found";

    emptyMessage.hidden = filteredRecipes.length !== 0;

    for (let i = 0; i < filteredRecipes.length; i++) {
        let recipe = filteredRecipes[i];

        let isFavorite = favorites.includes(recipe.id);

        recipeGrid.innerHTML += `
            <div class="recipe-card">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    class="recipe-image"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <div class="recipe-info">

                    <div class="recipe-meta">
                        <span class="recipe-category">
                            ${recipe.emoji} ${recipe.category}
                        </span>

                        <span>⏱️ ${recipe.time}</span>
                    </div>

                    <h3>${recipe.name}</h3>

                    <p>${recipe.description}</p>

                    <div class="card-actions">

                        <button
                            class="view-button"
                            onclick="showRecipe(${recipe.id})">
                            View Recipe →
                        </button>

                        <button
                            class="favorite-button"
                            onclick="toggleFavorite(${recipe.id})"
                            aria-label="Toggle favorite">
                            ${isFavorite ? "❤️" : "🤍"}
                        </button>

                    </div>

                </div>
            </div>
        `;
    }
}


// Filter recipes by category
function filterCategory(category, button) {
    selectedCategory = category;
    favoritesOnly = false;

    let buttons = document.querySelectorAll(".category");

    buttons.forEach(function(item) {
        item.classList.remove("active");
    });

    button.classList.add("active");

    displayRecipes();
}


// Clear search
function clearSearch() {
    document.getElementById("searchInput").value = "";
    displayRecipes();
}


// Add or remove favorites
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(function(item) {
            return item !== id;
        });
    } else {
        favorites.push(id);
    }

    displayRecipes();
}


// Show favorite recipes
function showFavorites() {
    favoritesOnly = true;
    selectedCategory = "All";

    let buttons = document.querySelectorAll(".category");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    buttons[0].classList.add("active");

    document.getElementById("recipes").scrollIntoView({
        behavior: "smooth"
    });

    displayRecipes();
}


// Show one recipe with ingredients and instructions
function showRecipe(id) {
    let recipe = recipes.find(function(item) {
        return item.id === id;
    });

    if (!recipe) {
        return;
    }

    let details = document.getElementById("recipeDetails");

    details.innerHTML = `
        <img
            src="${recipe.image}"
            alt="${recipe.name}"
            class="detail-image"
            onerror="this.style.display='none'"
        >

        <p class="recipe-category">
            ${recipe.emoji} ${recipe.category} · ⏱️ ${recipe.time}
        </p>

        <h2>${recipe.name}</h2>

        <p>${recipe.description}</p>

        <h3>🛒 Ingredients</h3>

        <ul>
            ${recipe.ingredients.map(function(ingredient) {
                return `<li>${ingredient}</li>`;
            }).join("")}
        </ul>

        <h3>👩‍🍳 Instructions</h3>

        <ol>
            ${recipe.instructions.map(function(step) {
                return `<li>${step}</li>`;
            }).join("")}
        </ol>
    `;

    document.getElementById("recipeModal").classList.add("show");
}


// Close popup
function closeModal() {
    document.getElementById("recipeModal").classList.remove("show");
}


// Close popup when clicking outside it
function closeOutside(event) {
    if (event.target.id === "recipeModal") {
        closeModal();
    }
}

