onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:pickaxe_steel',
        'atum:ptahs_decadence',
        'tconstruct:pickaxe'
    ];

    var exceptions = [
        'betterendforge:aeternium_pickaxe_head',
        'betterendforge:thallasium_pickaxe_head',
        'betterendforge:terminite_pickaxe_head'
    ];

    var tags = ['forge:tools', 'forge:tools/pickaxe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_pickaxe/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
