onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_chest',
        'immersiveengineering:armor_steel_chest',
        'mekanism:hazmat_gown',
        'mekanism:jetpack',
        'mekanism:jetpack_armored',
        'mekanism:mekasuit_bodyarmor'
    ];

    var exceptions = [
        'pneumaticcraft:jet_boots_upgrade_1',
        'atum:limestone_chest',
        'kubejs:pneumatic_chestplate_package',
        'kubejs:pneumatic_chestplate_assembly'
    ];

    var tags = ['forge:armor', 'forge:armor/chest'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_chestplate/)
            .add(/atum:.*_chest/)
            .add(/atum:body/)
            .remove(exceptions);
    });
});
