onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').chance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100
        // }
    ];

    recipetypes_crushing = (event, recipe) => {
        // pedestals
        event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: recipe.input,
            result: recipe.output
        });

        // industrialforegoing
        event.custom({
            type: 'industrialforegoing:crusher',
            input: recipe.input,
            output: recipe.output
        });

        // thermal
        event.recipes.thermal
            .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
            .experience(recipe.experience);
        event.recipes.mekanism.enriching(recipe.output, recipe.input);
        event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary_output);
        event.recipes.create.milling([recipe.output, recipe.secondary_output], recipe.input);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
