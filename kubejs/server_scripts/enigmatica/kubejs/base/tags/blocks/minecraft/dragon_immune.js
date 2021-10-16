onEvent('block.tags', (event) => {
    const blocks = [
        '#forge:candles',
        'minecraft:skeleton_skull',
        'minecraft:wither_skeleton_skull'
    ];
    event.get('minecraft:dragon_immune').add(blocks);
});
