scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
	
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
mySprite = sprites.create(img`
    . . . . . e e e e e e . . . . . 
    . . . . e e d d d d e e . . . . 
    . . . e e d d d d d d e . . . . 
    . . . e d d d d d d d e e . . . 
    . . . e d d d d d d d d e . . . 
    . . . d d 1 e d e 1 d d . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d d d 3 3 d d d d . . . . 
    . . . d d d d d d d d . . . . . 
    . . . . e e d d e e . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . d b b b b b b d . . . . . 
    . . . d b b b b b b d . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . . b b b b . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
game.setGameOverMessage(false, "BETTER LUCK NEXT TIME ")
