namespace SpriteKind {
    export const Platform1 = SpriteKind.create()
    export const platform2 = SpriteKind.create()
    export const platform3 = SpriteKind.create()
    export const key1 = SpriteKind.create()
    export const key2 = SpriteKind.create()
    export const platform4 = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Platform1, 14, function (sprite) {
    platform_1.vx = 0 - platform_1.vx
})
function key1 () {
    key_1 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    key_1.setPosition(279, 950)
    key_1.setKind(SpriteKind.key1)
}
function platform_4 () {
    platform4 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.platform4)
    platform4.vx = 100
    platform4.setPosition(825, 651)
}
// Will create ninja
function main_character () {
    // Moves the character
    controller.moveSprite(Ninja_Dave, 100, 100)
    Ninja_Dave.setPosition(10, 0)
}
function key2_delete () {
    if (Ninja_Dave.overlapsWith(key_2)) {
        key_2.destroy()
        scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f e e e e e e e e e e f f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e f e e f 
f f f f f e e e e e e f e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e e e e e e f e e e f 
f f f f e e e e e e e e f e e f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, false)
        info.changeScoreBy(1)
        game.splash("BUSINESS AWARD COLLECTED")
    }
}
function key_1_delete () {
    if (Ninja_Dave.overlapsWith(key_1)) {
        key_1.destroy()
        scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f e e e e e e e e e e f f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e f e e f 
f f f f f e e e e e e f e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e e e e e e f e e e f 
f f f f e e e e e e e e f e e f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, false)
        info.changeScoreBy(1)
        game.splash("FUTURE AWARD COLLECTED")
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.platform3, function (sprite, otherSprite) {
    sprite.bottom = otherSprite.top
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ninja_Dave,
    [img`
. . . . . . . . . . 5 . . 5 . . 
. . . . . 8 8 8 8 8 5 . . . 5 . 
. . . . . 5 5 5 5 5 . . . 5 . . 
. . . . . 1 1 8 8 8 5 . . . 5 . 
. . . . . 8 8 8 8 8 . 5 . 5 . . 
. . . . . . 8 8 8 8 . . 5 . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . 5 5 5 . 5 . 
. . . . . 8 8 8 8 8 5 . . 5 . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 1 1 8 8 8 5 . . . 5 . 
. . . . . 8 8 8 8 8 . 5 . 5 . 5 
. . . . . . 8 8 8 8 . . 5 . . 5 
. . . . d . 8 8 8 8 . . . . 5 . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . . . 8 f f 8 . d . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . f f . . 8 . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . 5 5 5 . 5 . 
. . . . . 8 8 8 8 8 5 . . 5 . 5 
. . . . . 5 5 5 5 5 . . . . 5 . 
. . . . . 1 1 8 8 8 5 5 5 . . . 
. . . . . 8 8 8 8 8 . . 5 . 5 . 
. . . . . . 8 8 8 8 . . . 5 . . 
. . . . d . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . . . 8 f f 8 . d . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . 5 . . 5 . . 
. . . . . 8 8 8 8 8 5 . . . 5 . 
. . . . . 5 5 5 5 5 . . . 5 . . 
. . . . . 1 1 8 8 8 5 . . . 5 . 
. . . . . 8 8 8 8 8 . 5 . 5 . . 
. . . . . . 8 8 8 8 . . 5 . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function startbutton () {
    game.setDialogFrame(img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
    game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    game.setDialogTextColor(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.platform2, function (sprite, otherSprite) {
    sprite.bottom = otherSprite.top
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key2, function (sprite, otherSprite) {
    key2_delete()
})
function intro () {
    startbutton()
    scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 c c c c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 c c c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 c c c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 c c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c c 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 c c c c c 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 c c c c c c 1 1 1 c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 c c c c c c c c 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 c c b b b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b 1 1 1 b b c c c c c c 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b 1 1 1 b b b b b c c c 1 1 1 1 c c c c c c c c c 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 c c c c c c c c c c b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b 1 1 1 b b b b b b c c 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 c c c 1 1 1 1 1 1 1 1 1 b b c c c b b b b b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b 1 1 1 b b b b b b b 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 c b 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b 1 1 1 c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b b b 1 1 1 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 b 1 1 1 1 b b b b b b b b b b b b b b 1 1 1 c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b b b 1 1 1 c c c 1 1 1 1 1 c c c c c c 1 1 1 b b 1 1 1 1 b b b 1 1 1 b b b b b b b b b b b b b b 1 1 1 c c c c c c b b b b b b c c c b b c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b b 1 1 1 1 c c c 1 1 1 1 c c c c c c c 1 1 1 b b 1 1 1 b b b b 1 1 1 b b b b b b b b b b b b b b 1 1 1 c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b c c c c c c c 
c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b 1 1 1 b b b b b 1 1 1 1 1 c c c 1 1 1 c c c c c c c c 1 1 1 b b 1 1 1 b b b b 1 1 1 1 b b b b b b b b b b b b b 1 1 1 c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b 1 1 1 b b b 1 1 1 1 1 1 b c c c 1 1 1 c c c c c c c 1 1 1 1 b b 1 1 1 b b b b 1 1 1 1 b b b b b b b b b b b b b 1 1 1 c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b 1 1 1 b b 1 1 1 1 1 1 b b c c c 1 1 1 c c c c c c 1 1 1 1 1 b b 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b 1 1 1 1 c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 b b b c c c 1 1 1 1 c c c 1 1 1 1 1 1 b b b 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b 1 1 1 1 c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 b b b b b c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b 1 1 1 c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b 1 1 1 1 b b b b b b c c c c 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b 1 1 1 c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b 1 1 1 b b b b b b b c c c c c 1 1 1 1 1 1 1 c c b b b b b 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c 1 1 1 c c c c c c c b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 1 1 1 b b b b b b b b b b b b b 1 1 1 b b b b b b c c c c c 1 1 1 c c c c c c c b b b b 1 1 1 b b b 1 1 1 b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 1 1 1 b b b b b b b b b b b b b 1 1 1 1 b b b b c c c c c 1 1 1 1 1 1 1 c c c c b b b b 1 1 1 b b 1 1 1 1 b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 1 1 1 b b b b b b b b b b b b 1 1 1 1 1 1 b b b c c c c c 1 1 1 1 1 1 1 1 c c b b b b b 1 1 1 b 1 1 1 1 1 b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 b 1 1 1 1 b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 c c c 1 1 1 1 c c 1 1 1 1 1 b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 c c 1 1 1 c c c c 1 1 1 1 b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b 1 1 1 b b b b b b b b b b 1 1 1 1 b b b b 1 1 1 1 c c 1 1 1 c c c c c 1 1 1 b b b b b 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b 1 1 1 b b b b b b b b b b 1 1 1 b b b b b 1 1 1 1 b c 1 1 1 c c c c c 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 b b b b b b b b b b 1 1 1 b b b b b 1 1 1 1 b c 1 1 1 1 c c c c 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 b b b b b b b b b b 1 1 1 1 b b b 1 1 1 1 b b c 1 1 1 1 c c c 1 1 1 1 b b b b b 1 1 1 1 b b 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 b b b b b b b b b b 1 1 1 1 b b 1 1 1 1 1 b b c c 1 1 1 1 c c 1 1 1 1 b b b b b 1 1 1 1 b b b b 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 b b b 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 1 b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 1 b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 1 1 1 b b b b b b b b c 1 1 1 1 1 1 b b b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 b b b b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 b b 1 1 1 1 1 1 b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b 
b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 b b 1 1 1 1 b b 1 1 1 1 1 b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b 1 1 1 1 b b 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 b 1 1 1 1 1 b b 1 1 1 1 b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b 1 1 1 b b b b b 1 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 b b b b b b 1 1 1 b 1 1 1 1 1 b 1 1 1 1 b b b 1 1 1 1 b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b 1 1 1 b b b b b b 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 b 1 1 1 1 1 1 1 1 1 b b b b 1 1 1 1 b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b 1 1 1 b b b b b b 1 1 1 1 b b b b 1 1 1 1 1 1 1 1 1 1 1 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 1 1 1 1 b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b 1 1 1 1 b b b b b 1 1 1 1 b b b 1 1 1 1 1 b b b 1 1 1 1 b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b 1 1 1 1 b b b b b b 1 1 1 b b b 1 1 1 1 b b b b b 1 1 1 b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 b b b b b 1 1 1 b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b b 1 1 1 1 b b b 1 1 1 b b b b b 1 1 1 1 b b b b b 1 1 1 1 1 b 1 1 1 1 1 1 f b b b b 1 1 1 b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b b 1 1 1 1 b b 1 1 1 1 b b b b 1 1 1 1 1 b b b b b b 1 1 1 1 b b 1 1 1 1 1 b b b b b 1 1 1 b b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b 1 1 1 1 b b b b 1 1 1 1 b b b 1 1 1 1 b b b 1 1 1 1 1 b b b b b b b b 1 1 1 b b b 1 1 1 b b b b b b 1 1 1 b b b b b b 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 1 1 1 b b 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 b b b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 1 1 1 1 1 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 1 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 5 5 5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
5 5 5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
5 5 5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
5 5 5 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
    game.showLongText("      Press any button!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b c c c c c c c 
c c c c c c c c c c c c c c b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b c c c c c c 
c c c c c c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b b b b b 
c c c c c c c c c c c b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b 
c c c c b c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c b b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
    pause(500)
    game.showLongText("Climb your way to victory!", DialogLayout.Center)
    game.showLongText("Jumps refill every 2 seconds souse them wisely!", DialogLayout.Center)
    game.showLongText("Grab the key at the top of every level to unlock the next stage!", DialogLayout.Center)
    game.showLongText("The keys are Business Achievement Awards, so get all 4!", DialogLayout.Center)
    game.showLongText("         Be careful as the platforms WILL get faster!", DialogLayout.Center)
    pause(500)
    game.showLongText("        Use the LEFT and RIGHT buttons to move", DialogLayout.Center)
    game.showLongText("         Use the A button to jump your way to victory!", DialogLayout.Center)
}
function background () {
    scene.setTileMap(img`
2 2 1 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
2 2 1 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
2 2 1 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
2 2 1 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
2 2 1 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
2 2 1 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b c c c c c b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c b b b b 
2 2 1 b b b b b c c c c c c c c c c c c c c c c c c c c c c b c c c c c c c b b c c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c b b b 
2 2 1 b b b b b c c c c c c c c c c c c c c c c c c c c c c b c c c c c b b b b c c c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c b b 
2 2 1 b b b b c c c c b b c c c c c c c c c c c c c c c c c b c c c c c b b b b c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b c c c c c c b b b b b b b b b c c c c c c c b b 
2 2 1 b b b b c c c c b b c c c c c c c c c c b b c c c c c b c c c c c b b b b c c c c c b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c b b b b b b b b c c c c c c c b b 
2 2 1 b b b b c c c c b b c c c c c c c c c b b b b b b b b b c c c c c b b b b c c c c c b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c b b b b b b b b b c c c c c c b b 
2 2 1 b b b b c c c b b b c c c c c b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b c c c c c c c b b b b b b b c c c c c c c c b b 
2 2 1 b b b b c c c b b b c c c c c b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c c c c c c c b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b c c c c c c c b c c c c c c c c c c c c c c c b b b b b b b b b c c c c c b b b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e c c c c c c c c c c c c b b b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c c c c c c c c b b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c c c c c c c c c b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 . c c c c c c c c c c c c c c b b b b b b b b b b c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 . c c c c c c c c c c c c c c c b b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b c c c c c c c c c c c c c b b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b c c c c c c b c c c c c c c b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 5 e b b c c c c c b b c c c c c c c c b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b c c c c c b b b c c c c c c c b b b b b b c c c c c b b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 e b b c c c c c b b b c c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b b c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 5 e b c c c c c c b b b b c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b b b b b b b b b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b b b b b b b b b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e e e e e e e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 4 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 4 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e e e e e e e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e e e e e e e e e e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e e e e e e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 6 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 3 3 3 3 3 3 3 6 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e e e e e e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 5 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 5 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 5 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 5 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 3 3 3 3 3 3 3 3 e f f f f f f f f f e 3 3 3 3 3 3 3 e f f f f f e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d a a a a a a a a e d d d d d d d d d e a a a a a a a e d d d d d e a a a a a a e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
    scene.cameraFollowSprite(Ninja_Dave)
    scene.setTile(15, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 e e e e e e 7 7 7 7 7 7 
7 7 7 e e e e e e e e e e e 7 7 
7 7 e e e e e e e e e e e e e e 
e e e e f e e e e e e e e e e e 
e f e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e f e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f e e e e e e e e e e e e e e 
e e e e e e e e e e e e f e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    scene.setTile(13, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e f e e e e e f e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(10, img`
f f f f f f f f f f f f f 5 5 f 
f f f f f f 5 f f f f f 5 5 5 f 
f f f f f 5 5 f f f f f 5 4 5 f 
f f f f f 5 5 f f f f 5 4 4 5 f 
f f f f 5 4 5 f f f 5 5 4 4 5 5 
f f f f 5 4 4 5 f f 5 4 4 4 4 5 
f f f 5 4 4 4 5 f 5 4 4 4 4 4 5 
f f 5 5 4 4 4 5 f 5 4 4 4 4 4 5 
f f 5 4 4 4 4 5 5 4 4 4 4 4 4 5 
f 5 5 4 4 4 4 4 5 4 4 4 4 4 4 5 
f 5 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, true)
    scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f e e f e e e e e e e e f e e f 
f e e e f e e e e e e f e e e f 
f e e e e f e e e e f e e e e f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e f e e f e e e e e f 
f e e e e f e e e e f e e e e f 
f e e e f e e e e e e f e e e f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(14, img`
f f f f f f f f f f f f f f f f 
f f d d d d d f f d d d d d f f 
f d f d d d d f f d d d d f d f 
f d d f d d d f f d d d f d d f 
f d d d f d d f f d d f d d d f 
f d d d d f d f f d f d d d d f 
f d d d d d f f f f d d d d d f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f d d d d d f f f f d d d d d f 
f d d d d f d f f d f d d d d f 
f d d d f d d f f d d f d d d f 
f d d f d d d f f d d d f d d f 
f d f d d d d f f d d d d f d f 
f f d d d d d f f d d d d d f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(2, img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f e e f e e e e e e e e f e e f 
f e e e f e e e e e e f e e e f 
f e e e e f e e e e f e e e e f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e f e e f e e e e e f 
f e e e e f e e e e f e e e e f 
f e e e f e e e e e e f e e e f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(1, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(5, img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(6, img`
f f f f f f f f f f f f f f f f 
f f f f e e e e e e e e e e f f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e f e e f 
f f f f f e e e e e e f e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e e e e e e f e e e f 
f f f f e e e e e e e e f e e f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f e e e e e e e e e e f f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e f e e f 
f f f f f e e e e e e f e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e e e e e e f e e e f 
f f f f e e e e e e e e f e e f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(0, img`
f f f f f f f f f f f f f f f f 
f f f f e e e e e e e e e e f f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e f e e f 
f f f f f e e e e e e f e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e e f f e e e e e e f 
f f f f f e f e e f e e e e e f 
f f f f f f e e e e f e e e e f 
f f f f f e e e e e e f e e e f 
f f f f e e e e e e e e f e e f 
f f f f e e e e e e e e e f e f 
f f f f e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.platform4, function (sprite, otherSprite) {
    sprite.bottom = otherSprite.top
})
scene.onHitTile(SpriteKind.platform4, 14, function (sprite) {
    platform4.vx = 0 - platform4.vx
})
function weapon () {
    shuriken = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . f f . . . . . 
. . . f 1 1 f . f 1 1 f . . . . 
. . . . f 1 1 f 1 1 f . . . . . 
. . . . . f 1 1 1 f . . . . . . 
. . . . f f 1 1 1 f . . . . . . 
. . . f 1 1 f f 1 1 f . . . . . 
. . . f 1 f . . f 1 f . . . . . 
. . . . f . . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Ninja_Dave, 200, 0)
    shuriken.setKind(SpriteKind.Projectile)
}
function platform_2 () {
    platform_two = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.platform2)
    platform_two.vx = 30
    platform_two.setPosition(620, 870)
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    info.changeLifeBy(-1)
    Ninja_Dave.setPosition(10, 0)
    Ninja_Dave.say("AAAHHH", 2000)
    pause(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ninja_Dave,
    [img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
5 . . . . 5 8 8 8 1 1 . . . . . 
. 5 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . d . . . 
. . . . . . 8 8 8 8 . . 8 . . . 
. . d 8 8 8 f 8 8 8 8 8 8 . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . 8 . . . . . . 
. . . . . . . . . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. 5 . . 5 5 8 8 8 8 8 . . . . . 
. 5 . 5 . . 5 5 5 5 5 . . . . . 
. . 5 5 . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . 8 8 8 f 8 8 8 8 8 d . . . 
. . . 8 . . 8 f f 8 . . . . . . 
. . . d . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
5 . . . . 5 8 8 8 1 1 . . . . . 
. 5 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . d . . . 
. . . . . . 8 8 8 8 . . 8 . . . 
. . . . 8 8 f 8 8 8 8 8 8 . . . 
. . . . d . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . f f . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . 5 . 5 5 8 8 8 8 8 . . . . . 
. 5 5 . . . 5 5 5 5 5 . . . . . 
5 . . . . 5 8 8 8 1 1 . . . . . 
. 5 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . d . . . 
. . . . . . 8 8 8 8 . . 8 . . . 
. . d 8 8 8 f 8 8 8 8 8 8 . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function platform_one () {
    platform_1 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Platform1)
    platform_1.vx = 30
    platform_1.setPosition(828, 696)
}
scene.onHitTile(SpriteKind.platform2, 14, function (sprite) {
    platform_two.vx = 0 - platform_two.vx
})
function key2 () {
    key_2 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . 1 . . . 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    key_2.setPosition(569, 695)
    key_2.setKind(SpriteKind.key2)
}
info.onCountdownEnd(function () {
    main_character()
    background()
    platform_one()
    platform_2()
    platform_3()
    platform_4()
    key1()
    key2()
    info.setLife(3)
    info.setScore(0)
})
function new_sprites () {
    Ninja_Dave = sprites.create(img`
. . . 5 5 . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . f f . . f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Ninja_Dave.setPosition(-20, -1200)
    Ninja_Dave.setFlag(SpriteFlag.ShowPhysics, true)
}
function platform_3 () {
    platform3 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f e e e e e e e e e e e e f f 
f e f e e e e e e e e e e f e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e e e e f e e f e e e e e f 
f e e e e e e f f e e e e e e f 
f e e e e e e f f e e e e e e f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f e e f e e e e e e e e f e e f 
f e f e e e e e e e e e e f e f 
f f e e e e e e e e e e e e f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.platform3)
    platform3.vx = 100
    platform3.setPosition(213, 1312)
}
// This button will make my main character jump
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Ninja_Dave.vy = -170
    // This will animate my character
    animation.runImageAnimation(
    Ninja_Dave,
    [img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . 8 . 5 5 5 5 . 8 . . . . 
. . . . d . 8 8 8 f . d . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 . . 5 . . . . . . . . . . 
. 5 . 5 . 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . 8 . 8 f f 8 . 8 . . . . 
. . . . d . 5 5 5 5 . d . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 5 . 5 5 . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
5 . 5 . . 5 8 8 8 1 1 . . . . . 
5 . 5 . . 5 8 8 8 8 8 . . . . . 
. 5 . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . d . 8 f f 8 . d . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . 5 . 5 5 8 8 8 8 8 . . . . . 
. 5 . . . . 5 5 5 5 5 . . . . . 
. 5 . . . 5 8 8 8 1 1 . . . . . 
. 5 . . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . 5 . . . 8 8 8 8 . . . . . . 
. 5 5 . d 8 f 8 8 8 8 d . . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
5 5 5 . 5 5 8 8 8 8 8 . . . . . 
. 5 . . . . 5 5 5 5 5 . . . . . 
. 5 . . . 5 8 8 8 1 1 . . . . . 
. . . . . 5 8 8 8 8 8 . . . . . 
. . 5 5 5 . 8 8 8 8 . . . . . . 
. 5 . . d . 8 8 8 8 . d . . . . 
. 5 . . 8 8 f 8 8 8 8 8 . . . . 
. . 5 . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . 5 . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
5 . 5 5 . 5 8 8 8 1 1 . . . . . 
5 . 5 . . 5 8 8 8 8 8 . . . . . 
. 5 . 5 d . 8 8 8 8 . d . . . . 
. . . . 8 . 8 8 8 8 . 8 . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. 5 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 5 . 5 . 5 5 5 5 5 . . . . . 
5 . 5 . . 5 8 8 8 1 1 . . . . . 
5 . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. 5 . . d . 8 8 8 8 . d . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . d 8 f 8 8 8 8 d . . . . 
. . . . . . 8 f f 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . d . 8 f f 8 . d . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . 5 5 . . . . . . . . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
5 5 . . . . 5 5 5 5 5 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . . 5 5 . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . 8 8 f 8 8 8 8 8 . . . . 
. . . . d . 8 f f 8 . d . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform1, function (sprite, otherSprite) {
    sprite.bottom = otherSprite.top
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key1, function (sprite, otherSprite) {
    key_1_delete()
})
scene.onHitTile(SpriteKind.platform3, 14, function (sprite) {
    platform3.vx = 0 - platform3.vx
})
let platform3: Sprite = null
let platform_two: Sprite = null
let shuriken: Sprite = null
let key_2: Sprite = null
let Ninja_Dave: Sprite = null
let platform4: Sprite = null
let key_1: Sprite = null
let platform_1: Sprite = null
new_sprites()
intro()
info.startCountdown(5)
