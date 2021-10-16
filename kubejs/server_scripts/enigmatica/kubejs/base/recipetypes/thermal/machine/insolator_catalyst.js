onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'industrialforegoing:fertilizer',
                primaryMod: 2.0,
                secondaryMod: 2.0,
                energyMod: 0.8,
                minChance: 0.8,
                useChance: 0.8
            },
            {
                input: 'farmingforblockheads:red_fertilizer',
                primaryMod: 2.3,
                secondaryMod: 2.3,
                energyMod: 0.8,
                minChance: 0.15,
                useChance: 0.15
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator_catalyst(recipe.input)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance);
    });
});
