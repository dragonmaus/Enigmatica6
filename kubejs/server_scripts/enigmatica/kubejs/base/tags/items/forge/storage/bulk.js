onEvent('item.tags', (event) => {
    var items = ['dankstorage:dock', 'industrialforegoing:black_hole_controller'];

    var tags = ['forge:storage', 'forge:storage/bulk'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/black_hole_unit/)
            .add(/_drawer/)
            .add(/qio_drive/)
            .add(/mekanism:\w+_bin/)
            .add(/framedcompactdrawers:framed/)
            .add(/refinedstorage:\w+storage/)
            .add('#refinedstorage:parts/items')
            .add('#refinedstorage:disks/items')
            .add('#refinedstorage:storage_blocks/items')
            .add(/dank_/);
    });
});
