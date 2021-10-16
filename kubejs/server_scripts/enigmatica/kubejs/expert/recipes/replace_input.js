onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { id: 'create:crafting/kinetics/mechanical_piston' },
            toReplace: '#minecraft:planks',
            replaceWith: ['minecraft:piston', 'minecraft:sticky_piston']
        },
        {
            filter: { id: 'thermal:machine_pyrolyzer' },
            toReplace: 'minecraft:blaze_rod',
            replaceWith: '#forge:gems/coal_coke'
        },
        {
            filter: { id: 'atum:scarab_from_crunchy_scarab' },
            toReplace: '#forge:ingots/gold',
            replaceWith: '#forge:nuggets/nebu'
        },
        {
            filter: { id: '/wilden_summon/' },
            toReplace: 'minecraft:lapis_block',
            replaceWith: 'meetyourfight:velvet_fortune'
        },
        {
            filter: { mod: 'powah' },
            toReplace: 'powah:capacitor_basic',
            replaceWith: 'powah:capacitor_basic_large'
        },
        {
            filter: { id: '/pressure_chamber_glass/' },
            toReplace: '#forge:glass',
            replaceWith: '#thermal:glass/hardened'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
});
