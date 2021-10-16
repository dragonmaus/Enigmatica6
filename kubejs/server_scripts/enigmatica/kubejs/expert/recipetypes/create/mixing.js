onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: Item.of('undergarden:froststeel_ingot', 3)
        },
        {
            heated: true,
            inputs: [
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/quartz',
                '#forge:dusts/quartz',
                '#forge:tar'
            ],
            output: 'kubejs:coarse_lapis_lazuli_compound'
        },
        {
            superheated: true,
            inputs: [
                '#forge:sand/colorless',
                '#forge:sand/colorless',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                'thermal:tar',
                'thermal:tar'
            ],
            output: Item.of('powah:dielectric_paste', 24),
            id: 'powah:crafting/dielectric_paste'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
