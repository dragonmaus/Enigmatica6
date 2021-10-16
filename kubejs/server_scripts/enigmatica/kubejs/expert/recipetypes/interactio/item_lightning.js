onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_lightning/';
    const recipes = [
        {
            inputs: [
                { item: 'minecraft:snowball', count: 16 },
                { item: 'quark:bottled_cloud', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 1, return_chance: 0.75 }
            ],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 16
            },
            id: `${id_prefix}charged_snowball`
        },
        {
            inputs: [
                { item: 'minecraft:heart_of_the_sea', count: 1 },
                { item: 'minecraft:nautilus_shell', count: 4 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { tag: 'forge:dusts/fluorite', count: 2 },
                { tag: 'forge:dusts/mana', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: [
                { item: 'undergarden:music_disc_relict', count: 1 },
                { item: 'aquaculture:fish_bones', count: 1 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { item: 'minecraft:fermented_spider_eye', count: 2 },
                { item: 'undergarden:raw_dweller_meat', count: 4 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/iron', count: 1 },
                { tag: 'forge:dusts/iron', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 1 },
                { tag: 'forge:dusts/copper', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'minecraft:lodestone', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}lodestone`
        },
        {
            inputs: [
                { item: 'minecraft:bell', count: 1 },
                { item: 'atum:ectoplasm', count: 3 },
                { tag: 'forge:dusts/fluorite', count: 1 },
                { tag: 'atum:relic_non_dirty', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:haunted_bell', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:haunted_bell'
        },
        {
            inputs: [
                { item: 'thermal:phytogro', count: 2 },
                { tag: 'forge:dusts/iron', count: 2 },
                { tag: 'forge:dusts/nickel', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:invar_dust', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 3
            },
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: [
                { tag: 'forge:dusts/fluorite', count: 1 },
                { item: 'minecraft:prismarine', count: 6 },
                { item: 'undergarden:shiverstone', count: 6 }
            ],
            output: {
                entries: [{ result: { item: 'kubejs:firmament', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 3
            },
            id: `${id_prefix}firmament`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_lightning';
        event.custom(recipe).id(recipe.id);
    });
});
