onEvent('entity_type.tags', (event) => {
    let entities = ['minecraft:zombified_piglin', 'atum:mummy'];
    event.get('forge:zombies').add(entities);
});
