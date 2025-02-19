onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'industrialforegoing:fertilizer',
                growthModifier: 1.7
            },
            {
                input: 'thermal:phytogro',
                growthModifier: 3.0
            },
            {
                input: 'farmingforblockheads:red_fertilizer',
                growthModifier: 2.0
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fertilizer(recipe.input).growthModifier(recipe.growthModifier);
    });
});
