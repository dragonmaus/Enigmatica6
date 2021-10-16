onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';
    const recipes = [
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
            item_input: { item: 'kubejs:rftools_machine_frame_parts', count: 1 },
            item_output: { item: 'kubejs:unassembled_rftools_machine_frame_top', count: 1 },
            pressure: 4.5,
            speed: 0.8,
            exothermic: false,
            temperature: { min_temp: 1873 },
            id: `${id_prefix}unassembled_rftools_machine_frame_top`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 },
            item_input: { item: 'kubejs:smoldering_lapis_lazuli_compound', count: 1 },
            item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
            pressure: 2.0,
            speed: 0.8,
            id: 'pneumaticcraft:thermo_plant/upgrade_matrix'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
