let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 400,
    scene: [ Menu, Play]

}

let game = new Phaser.Game(config);
// test3
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 4;

// reserve keyboard bindings
let keyF, keyR, keyLEFT, keyRIGHT;
