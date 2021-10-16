onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'atum:blast_furnace',
        'atum:book',

        'betterendforge:leather_to_stripes',

        /create:pressing\/\w*_ingot/,

        'darkutils:crafting/rune_damage_player',
        'darkutils:crafting/blank_plate',
        /darkutils:crafting\/export_plate/,

        'farmersdelight:book_from_canvas',

        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'immersiveengineering:crafting/concrete',
        'immersiveengineering:crafting/concrete2',
        'immersiveengineering:mixer/concrete',
        /immersiveengineering:crafting\/plate_/,

        'minecraft:book',
        'minecraft:leather_to_stripes',
        'minecraft:stick',

        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/breaker2',
        'pedestals:upgrades/crafter1mk2',
        'pedestals:upgrades/recycler',
        'pedestals:upgrades/rfexpgen',
        'pedestals:upgrades/rffuelgen',

        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',

        'powah:crafting/dielectric_paste_2',
        'powah:energizing/blazing_crystal_2',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_basic_tiny',
        'powah:crafting/thermoelectric_plate',
        /powah:crafting\/cable_/,

        'quark:building/crafting/candles/candle_basic',

        'refinedstorage:quartz_enriched_iron',

        'tconstruct:smeltery/scorched/scorched_brick',
        'tconstruct:smeltery/scorched/scorched_brick_kiln',
        'tconstruct:smeltery/seared/melter',
        'tconstruct:smeltery/seared/seared_brick',
        'tconstruct:smeltery/seared/seared_brick_kiln',
        'tconstruct:tables/book_substitute',

        'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',

        /create:crafting\/materials\/andesite_alloy/,
        /emendatusenigmatica:alloy_dust/
    ];

    const outputRemovals = ['tiab:timeinabottle', 'minecraft:nautilus_shell'];

    const patchouli_safe_removals = [
        { output: 'pneumaticcraft:air_compressor', id: 'pneumaticcraft:air_compressor' },
        { output: 'pneumaticcraft:advanced_air_compressor', id: 'pneumaticcraft:advanced_air_compressor' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x1' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x4' },
        { output: 'pneumaticcraft:flux_compressor', id: 'pneumaticcraft:flux_compressor' },
        { output: 'pneumaticcraft:printed_circuit_board', id: 'pneumaticcraft:printed_circuit_board' },
        { output: 'pneumaticcraft:assembly_drill', id: 'pneumaticcraft:assembly_drill' },
        { output: 'pneumaticcraft:assembly_laser', id: 'pneumaticcraft:assembly_laser' },
        { output: 'pneumaticcraft:assembly_io_unit_import', id: 'pneumaticcraft:assembly_io_unit_import' },
        { output: 'pneumaticcraft:assembly_io_unit_export', id: 'pneumaticcraft:assembly_io_unit_export' },
        { output: 'pneumaticcraft:assembly_controller', id: 'pneumaticcraft:assembly_controller' },
        { output: 'pneumaticcraft:assembly_platform', id: 'pneumaticcraft:assembly_platform' },
        { output: 'pneumaticcraft:aerial_interface', id: 'pneumaticcraft:aerial_interface' },
        { output: 'pneumaticcraft:spawner_extractor', id: 'pneumaticcraft:spawner_extractor' }
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'thermal' });
    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'immersiveengineering' });

    patchouli_safe_removals.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });
});
