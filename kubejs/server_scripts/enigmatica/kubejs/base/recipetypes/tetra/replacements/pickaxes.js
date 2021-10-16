onEvent('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_pickaxe',
                material: 'bronze',
                stick: 'stick',
                improvements: {
                    'double/head_left:workable': 1,
                    'double/head_right:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_pickaxe',
                material: 'lapis',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:osmium_pickaxe',
                material: 'osmium',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_pickaxe',
                material: 'refined_glowstone',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_pickaxe',
                material: 'refined_obsidian',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:steel_pickaxe',
                material: 'steel',
                stick: 'stick'
            },
            {
                item: 'immersiveengineering:pickaxe_steel',
                material: 'steel',
                stick: 'treated_wood'
            },
            {
                item: 'aquaculture:neptunium_pickaxe',
                material: 'neptunium',
                stick: 'neptunium'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_double',
            modules: {
                'double/head_left': ['double/basic_pickaxe_left', `basic_pickaxe/${tool.material}`],
                'double/head_right': ['double/basic_pickaxe_right', `basic_pickaxe/${tool.material}`],
                'double/handle': ['double/basic_handle', `basic_handle/${tool.handle}`]
            },
            improvements: tool.improvements
        });
    });
    event.addJson('tetra:replacements/pickaxes.json', toolList);
});
