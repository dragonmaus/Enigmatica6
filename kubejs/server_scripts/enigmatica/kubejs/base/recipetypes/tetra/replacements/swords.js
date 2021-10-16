onEvent('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_sword',
                blade: 'bronze',
                guard: 'bronze',
                pommel: 'bronze',
                hilt: 'stick',
                improvements: {
                    'sword/blade:workable': 1,
                    'sword/pommel:workable': 1,
                    'sword/guard:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_sword',
                blade: 'lapis',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:osmium_sword',
                blade: 'osmium',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_sword',
                blade: 'refined_glowstone',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_sword',
                blade: 'refined_obsidian',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_sword',
                blade: 'refined_obsidian',
                guard: 'obsidian',
                pommel: 'obsidian',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:steel_sword',
                blade: 'steel',
                guard: 'steel',
                pommel: 'steel',
                hilt: 'stick'
            },
            {
                item: 'immersiveengineering:sword_steel',
                blade: 'steel',
                guard: 'steel',
                pommel: 'steel',
                hilt: 'treated_wood'
            },
            {
                item: 'aquaculture:neptunium_sword',
                blade: 'neptunium',
                guard: 'neptunium',
                pommel: 'neptunium',
                hilt: 'neptunium'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_sword',
            modules: {
                'sword/blade': ['sword/basic_blade', `basic_blade/${tool.blade}`],
                'sword/hilt': ['sword/basic_hilt', `basic_hilt/${tool.hilt}`],
                'sword/pommel': ['sword/decorative_pommel', `decorative_pommel/${tool.pommel}`],
                'sword/guard': ['sword/makeshift_guard', `makeshift_guard/${tool.guard}`]
            },
            improvements: tool.improvements
        });
    });
    event.addJson('tetra:replacements/swords.json', toolList);
});
