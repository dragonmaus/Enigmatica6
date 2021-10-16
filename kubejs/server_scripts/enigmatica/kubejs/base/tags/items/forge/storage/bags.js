onEvent('item.tags', (event) => {
    var items = [
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack'
    ];

    var tags = ['forge:storage', 'forge:storage/bag'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/bit_bag/)
            .add(/sophisticatedbackpacks:\w+backpack/);
    });
});
