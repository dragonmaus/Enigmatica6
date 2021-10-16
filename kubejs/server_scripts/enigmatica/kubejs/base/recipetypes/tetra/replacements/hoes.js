onEvent('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_hoe',
                material: 'bronze',
                stick: 'stick',
                improvements: {
                    'double/head_left:workable': 1,
                    'double/head_right:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_hoe',
                material: 'lapis',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:osmium_hoe',
                material: 'osmium',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_hoe',
                material: 'refined_glowstone',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_hoe',
                material: 'refined_obsidian',
                stick: 'stick'
            },
            {
                item: 'mekanismtools:steel_hoe',
                material: 'steel',
                stick: 'stick'
            },
            {
                item: 'immersiveengineering:hoe_steel',
                material: 'steel',
                stick: 'treated_wood'
            },
            {
                item: 'aquaculture:neptunium_hoe',
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
                'double/head_left': ['double/hoe_left', `hoe/${tool.material}`],
                'double/head_right': ['double/butt_right', `butt/${tool.material}`],
                'double/handle': ['double/basic_handle', `basic_handle/${tool.handle}`]
            },
            improvements: tool.improvements
        });
    });
    event.addJson('tetra:replacements/hoes.json', toolList);
});
