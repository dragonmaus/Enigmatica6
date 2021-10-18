onEvent('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_shovel',
                material: 'bronze',
                stick: 'stick',
                improvements: {
                    'double/head_left:workable': 1,
                    'double/head_right:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_shovel',
                material: 'lapis',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:osmium_shovel',
                material: 'osmium',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_shovel',
                material: 'refined_glowstone',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_shovel',
                material: 'refined_obsidian',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:steel_shovel',
                material: 'steel',
                stick: 'stick'
            },
            {
                item: 'immersiveengineering:shovel_steel',
                material: 'steel',
                stick: 'treated_wood'
            },
            {
                item: 'aquaculture:neptunium_shovel',
                material: 'neptunium',
                stick: 'neptunium'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_single',
            modules: {
                'single/basic_shovel': ['single/basic_shovel', `basic_shovel/${tool.material}`],
                'single/handle': ['single/basic_handle', `basic_handle/${tool.handle}`]
            },
            improvements: tool.improvements
        });
    });
    event.addJson('tetra:replacements/shovels.json', toolList);
});
