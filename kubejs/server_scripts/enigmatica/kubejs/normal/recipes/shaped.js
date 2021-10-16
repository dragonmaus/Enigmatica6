//todo remove in 0.6.0
/* onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'torchmaster:megatorch',
            pattern: ['AAA', 'BCB', 'DCD'],
            key: {
                A: 'torchmaster:feral_flare_lantern',
                B: '#enigmatica:crafting_materials/diamond',
                C: '#minecraft:logs',
                D: '#forge:storage_blocks/gold'
            }
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:glass',
                C: '#forge:storage_blocks/glowstone'
            }
        },
        {
            output: 'minecraft:furnace',
            pattern: ['LLL', 'L L', 'LLL'],
            key: {
                L: '#forge:stone'
            }
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            }
        },
        {
            output: Item.of('quark:white_candle', 2),
            pattern: ['B', 'A', 'A'],
            key: {
                A: '#forge:wax',
                B: '#forge:string'
            }
        },
        {
            output: Item.of('prettypipes:pipe', 12),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless'
            }
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 12),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless',
                C: 'thermal:cured_rubber'
            }
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
*/