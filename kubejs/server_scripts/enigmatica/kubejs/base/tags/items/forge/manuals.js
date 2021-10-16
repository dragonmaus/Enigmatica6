onEvent('item.tags', (event) => {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'solcarrot:food_book',
        'powah:book',
        'rftoolsbase:manual',
        'alexsmobs:animal_dictionary'
    ];
    event.get('forge:manuals').add(items);
});
