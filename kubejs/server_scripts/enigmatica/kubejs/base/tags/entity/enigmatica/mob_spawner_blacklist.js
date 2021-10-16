onEvent('entity_type.tags', (event) => {
    let entities = [
        '#minecraft:beehive_inhabitors',
        'alexsmobs:mimicube',
        'alexsmobs:centipede_body',
        'alexsmobs:centipede_tail',
        'alexsmobs:bone_serpent_part',
        'artifacts:mimic',
        'losttrinkets:dark_vex'
    ];
    event.get('enigmatica:mob_spawner_blacklist').add(entities);
});
