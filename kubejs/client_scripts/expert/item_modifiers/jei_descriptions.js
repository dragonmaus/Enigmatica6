onEvent('jei.information', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const disabledItems = ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'];
    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled in Expert mode, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
