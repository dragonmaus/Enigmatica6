onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['simplefarming:cheese_slice'],
            description: ['Obtained by right-clicking a Wheel of Cheese.']
        },
        {
            items: ['farmersdelight:ham'],
            description: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            description: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['powah:uraninite', 'powah:uraninite_block'],
            description: [
                'Uraninite Ore has been removed and does not spawn naturally. To obtain Uraninite, use the Powah Energizing Orb recipe.'
            ]
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            description: [
                'The Blizz spawns naturally in cold biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            description: [
                'The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            description: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['betterendforge:emerald_ice'],
            description: [
                'Found naturally in Ice Starfields in the End, it can also be created from water placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:dense_emerald_ice'],
            description: [
                'Found naturally in Ice Starfields in the End, it can also be created from Emerald Ice placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:ancient_emerald_ice'],
            description: [
                'Found naturally in Ice Starfields in the End, it can convert adjacent water blocks to Emerald Ice and those to Dense Emerald Ice.'
            ]
        },
        {
            items: ['simplefarming:habanero'],
            description: ['A very rare drop from farming Peppers.']
        },
        {
            items: ['mekanismgenerators:fusion_reactor_controller'],
            description: [
                'The Fusion Reactor has been nerfed quite heavily.',
                'It produces 60k-250k rf/t passively, but has potential for far higher output when paired with one or multiple Steam Turbines.'
            ]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            description: [
                "Nine Quintillion is big. Really big. You just won't believe how vastly hugely mind-bogglingly big it is."
            ]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            description: [
                "Unless you plan on sitting here for a few centuries, filling this tool isn't possible through conventional means. Some say the answer lies in Nucleosynthesis instead."
            ]
        },
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            description: [
                'Plant a Brown Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            description: [
                'Plant a Red Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            description: ['Max Energy Transfer Rate has been limited to 65,536 FE per tick.']
        },
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            description: ['Max Fluid Transfer Rate has been limited to 65,536 mb per tick.']
        },
        {
            items: ['minecraft:nautilus_shell'],
            description: [
                'Obtained by killing Nautilus, found in Oceans.',
                ' ',
                'Also obtained from Embedded Ammonite, found at any Y level in Oceans and Beaches.'
            ]
        },
        {
            items: ['architects_palette:twisted_sapling'],
            description: ['Obtained by tossing Saplings through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:warpstone'],
            description: ['Obtained by tossing Clay Blocks through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_cactus'],
            description: ['Obtained by tossing Cactus through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_coral', 'byg:warped_coral_fan', 'byg:warped_coral'],
            description: ['Obtained by tossing any coral through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:chiseled_abyssaline_bricks'],
            description: ['May be Charged by Right-Clicking with a Heart of the Sea. Used to power Abyssaline blocks.']
        },
        {
            items: [
                'architects_palette:abyssaline_lamp',
                'architects_palette:abyssaline_tile_slab',
                'architects_palette:abyssaline_tiles',
                'architects_palette:abyssaline_brick_slab',
                'architects_palette:abyssaline_pillar',
                'architects_palette:abyssaline_bricks',
                'architects_palette:abyssaline'
            ],
            description: [
                'Powered by placing next to a Charged Chiseled Abyssaline Bricks. Power is transmitted through to other Abyssaline blocks.'
            ]
        },
        {
            items: [
                'architects_palette:blank_acacia_totem',
                'architects_palette:shocked_acacia_totem',
                'architects_palette:placid_acacia_totem',
                'architects_palette:grinning_acacia_totem'
            ],
            description: ['Right-Click with an Axe to change the face.']
        },
        {
            items: ['betterendforge:silk_fiber'],
            description: ['Obtained by killing Silk Moths which are spawned by Silk Moth Nests.']
        },
        {
            items: [/upgrade_aquatic:\w+_coralstone$/],
            description: ['Obtained by placing Coralstone next to living coral.']
        },
        {
            items: ['upgrade_aquatic:coralstone'],
            description: ['Place next to living coral to infuse.']
        },
        {
            items: [/quark:\w+_crystal$/],
            description: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.'
            ]
        },
        {
            items: ['quark:bottled_cloud'],
            description: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: ['quark:root_item'],
            description: ['Drops occasionally when breaking Cave Roots.']
        },
        {
            items: ['meetyourfight:phantoplasm'],
            description: ['Drops from the Bellringer. Craft a Haunted Bell to summon.']
        },
        {
            items: ['meetyourfight:mossy_tooth'],
            description: ['Drops from Swampjaw. Craft a Fossil Bait to summon.']
        },
        {
            items: ['meetyourfight:fortunes_favor'],
            description: [`Drops from Dame Fortuna. Craft a Devil's Ante to summon.`]
        },
        {
            items: ['atum:ectoplasm'],
            description: [`Drops from Wraiths in the sandy wastes of Atum.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            description: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            description: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            description: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            description: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            description: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['byg:leaf_pile'],
            description: [`Gathered with Shears.`]
        },
        {
            items: ['atum:anputs_fingers_spores'],
            description: [`Found occasionally growing beneath Deadwood Trees. Requires darkness to grow.`]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            description: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            description: [
                `Used in a Logic Unit to create advanced Redstone Logic.`,
                ` `,
                `Programmed on an Engineer's Circuit Table. Requires Circuit Backplanes, Lead or Copper Wire, and Vacuum Tubes.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            description: [
                `Obtained by defeating the Warped Mosco.`,
                ` `,
                `Warped Mosco are creatures of nightmare created when a Crimson Mosquito sucks the blood of a Mungus covered in Warped Fungus.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            description: [
                `Mungus may be summoned through the Altar of Birthing, while Crimson Mosquitos may be created by bringing a Fly into the Nether.`
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });

    var framedDrawers = [
        'compact_drawer',
        'drawer_controller',
        'slave',
        'trim',
        'full_one',
        'full_two',
        'full_four',
        'half_one',
        'half_two',
        'half_four'
    ];
    framedDrawers.forEach((drawer) => {
        event.add('framedcompactdrawers:framed_' + drawer, [
            'Must be painted with any block to be used. To paint, put in any crafting grid with one block directly above and to its left diagonally.',
            'You can also put a different block directly on top of the drawer and/or directly to its left to customize it even further!'
        ]);
    });
});
