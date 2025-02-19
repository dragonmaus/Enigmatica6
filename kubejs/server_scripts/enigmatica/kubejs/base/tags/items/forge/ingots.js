onEvent('item.tags', (event) => {
    event.get('forge:ingots/uraninite').add('powah:uraninite');
    event.get('forge:ingots/energized_steel').add('powah:steel_energized');
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event.add('forge:ingots', [
        'betterendforge:aeternium_ingot',
        'betterendforge:terminite_ingot',
        'betterendforge:thallasium_ingot',
        'byg:blue_nether_brick',
        'byg:yellow_nether_brick',
        'create:andesite_alloy',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'industrialforegoing:pink_slime_ingot',
        'powah:uraninite',
        'kubejs:superheated_steel_ingot',
        'kubejs:hot_compressed_iron_ingot'
    ]);
    event.add('forge:ingots/superheated_steel', ['kubejs:superheated_steel_ingot']);
    event.add('forge:ingots/hot_compressed_iron', ['kubejs:hot_compressed_iron_ingot']);
    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']);

    event.add('forge:ingots/aeternium', ['betterendforge:aeternium_ingot']);
    event.add('forge:ingots/terminite', ['betterendforge:terminite_ingot']);
    event.add('forge:ingots/thallasium', ['betterendforge:thallasium_ingot']);
    event.add('forge:ingots/sunmetal', ['architects_palette:sunmetal_brick']);

    event.add('forge:ingots/nether_brick', ['byg:blue_nether_brick', 'byg:yellow_nether_brick']);
    event.get('forge:ingots/tinkers_bronze').add('tconstruct:tinkers_bronze_ingot');
});
