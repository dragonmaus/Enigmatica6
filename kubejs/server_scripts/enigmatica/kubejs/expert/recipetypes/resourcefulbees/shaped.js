onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'resourcefulbees:centrifuge',
            pattern: ['CBC', 'CAC', 'EDE'],
            key: {
                A: 'thermal:machine_frame',
                B: 'immersiveengineering:circuit_board',
                C: 'emendatusenigmatica:steel_ingot',
                D: 'minecraft:piston',
                E: 'minecraft:smooth_stone'
            },
            id: 'resourcefulbees:centrifuge'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
