namespace SpriteKind {
    export const Platform1 = SpriteKind.create()
    export const platform2 = SpriteKind.create()
    export const platform3 = SpriteKind.create()
    export const key1 = SpriteKind.create()
    export const key2 = SpriteKind.create()
    export const platform4 = SpriteKind.create()
    export const platform5 = SpriteKind.create()
    export const platform6 = SpriteKind.create()
    export const key3 = SpriteKind.create()
    export const signal = SpriteKind.create()
    export const key4 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
scene.onHitTile(SpriteKind.Platform1, 14, function (sprite) {
    platform_1.vx = 0 - platform_1.vx
})
// If the sprite hits this color, then the sprite will
// be re spawned at the
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    info.changeLifeBy(-1)
    Ninja_Dave.say("AAAHHH", 2000)
    pause(100)
    Ninja_Dave.setPosition(checkpoint_x, checkpoint_y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key3, function (sprite, otherSprite) {
    key_3_delete()
})
// Will create ninja
function main_character () {
    // Moves the character
    controller.moveSprite(Ninja_Dave, 150, 0)
    Ninja_Dave.setPosition(15, 0)
    Ninja_Dave.setFlag(SpriteFlag.ShowPhysics, true)
    Ninja_Dave.ay = 200
    checkpoint_x = 15
    checkpoint_y = 0
}
function key2_delete () {
    if (Ninja_Dave.overlapsWith(key_2)) {
        key_2.destroy(effects.fire, 500)
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
        info.changeScoreBy(100)
        game.splash("BUSINESS AWARD COLLECTED", "This award focuses on local and district/regional and state involvement; intermediate business skills; and leadership in the community. Pins will be sent to the local chapter adviser for presentation at a local awards ceremony or local FBLA event.")
        checkpoint_x = 661
        checkpoint_y = 725
        bpm = 250
    }
}
function platform_4 () {
    platform4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 1 . . . . 1 . . . . 1 . . 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. f f f f f f f f f f f f f f f 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. f f f f f f f f f f f f f f f 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. . . 1 . . . . 1 . . . . 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.platform4)
    platform4.vx = 50
    platform4.setPosition(825, 651)
}
function key_four () {
    if (Ninja_Dave.overlapsWith(key_4)) {
        key_4.destroy(effects.fire, 500)
        info.changeScoreBy(100)
        game.splash("AMERICA AWARD COLLECTED", "This award focuses on total association leadership, business skills, and involvement in community. Students qualifying for this award will receive pins at the National Leadership Conference.")
        game.over(true)
    }
}
function _3key () {
    key_3 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . 2 . . 5 5 5 . . . . . . . 
. . . 2 . 5 . . . 5 . . 2 2 2 . 
. . . . . 5 . . . 5 . 2 2 . . . 
. 2 2 2 . 5 . . . 5 . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . 2 . . . 5 . . . 2 . . . . 
. . 2 2 . . . 5 . . . 2 2 . . . 
. . 2 . . 5 5 5 . 2 . . 2 . . . 
. . . . . . . 5 . . 2 . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
`, SpriteKind.Player)
    key_3.setPosition(786, 344)
    key_3.setKind(SpriteKind.key3)
}
function key_1_delete () {
    if (Ninja_Dave.overlapsWith(key_1)) {
        key_1.destroy(effects.fire, 500)
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
        info.changeScoreBy(100)
        game.splash("FUTURE AWARD COLLECTED", "This award focuses on basic business skills, introduction to community service, and FBLA involvement at the local level. Pins will be sent to the local chapter adviser for presentation at a local awards ceremony or local FBLA event.")
        checkpoint_y = 990
        checkpoint_x = 373
        bpm = 225
    }
}
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
    if (last_level == 1) {
        animation.runImageAnimation(
        Ninja_Dave,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . f f . f f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 . . 8 8 8 8 . . 5 . 5 . 
. . . d . . 8 8 8 8 . 5 5 . 5 . 
. . . . . 8 8 8 8 8 . 5 5 5 . . 
. . . . . 1 1 8 8 8 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 8 8 8 8 8 5 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . f f . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . 5 
. . . 8 . . 8 8 8 8 . . d . . 5 
. . . d . . 8 8 8 8 . . d . 5 . 
. . . . . 8 8 8 8 8 . . 5 5 . . 
. . . . . 1 1 8 8 8 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 8 8 8 8 8 5 5 . . . . 
. . . . . . . . . . . . 5 5 . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f . . . . . . . . . 
. . . . . . 8 . f f . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . d 8 8 8 8 8 8 8 8 8 8 . . 5 
. . . . . . 8 8 8 8 . . d . . 5 
. . . . . . 8 8 8 8 . . d . 5 . 
. . . . . 8 8 8 8 8 . . 5 5 . . 
. . . . . 1 1 8 8 8 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . 5 . 
. . . . . 8 8 8 8 8 5 5 . 5 . 5 
. . . . . . . . . . . . 5 5 . . 
`],
        100,
        true
        )
    }
})
function _2key () {
    key_2 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . 2 . . 5 5 5 . . . . . . . 
. . . 2 . 5 . . . 5 . . 2 2 2 . 
. . . . . 5 . . . 5 . 2 2 . . . 
. 2 2 2 . 5 . . . 5 . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . 2 . . . 5 . . . 2 . . . . 
. . 2 2 . . . 5 . . . 2 2 . . . 
. . 2 . . 5 5 5 . 2 . . 2 . . . 
. . . . . . . 5 . . 2 . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
`, SpriteKind.Player)
    key_2.setPosition(569, 695)
    key_2.setKind(SpriteKind.key2)
}
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
    info.changeLifeBy(-1)
    Ninja_Dave.setPosition(checkpoint_x, checkpoint_y)
    Ninja_Dave.say("AAAHHH", 2000)
    pause(100)
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
    game.showLongText("     Press the spacebar!", DialogLayout.Bottom)
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
    game.showLongText("Grab the key at the top of every level to unlock the next stage!", DialogLayout.Center)
    game.showLongText("The keys are Business Achievement Awards, so get all 4!", DialogLayout.Center)
    game.showLongText("Avoid touching the spikes!", DialogLayout.Center)
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
2 2 1 b b b b c c c c b b c c c c c c c c c c c c c c c c c b c c c c c b b b b c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c b b 
2 2 1 b b b b c c c c b b c c c c c c c c c c b b c c c c c b c c c c c b b b b c c c c c b b b b b b b b c c c c c c c c c c e e e e e e e e e e e e c c c c c c c c b b b b b b b b c c c c c c c b b 
2 2 1 b b b b c c c c b b c c c c c c c c c b b b b b b b b b c c c c c b b b b c c c c c b b b b b b c c c c c c c c c c c c e 9 9 9 9 9 9 9 9 9 9 e c c c c c c c c b b b b b b b b b c c c c c c b b 
2 2 1 b b b b c c c b b b c c c c c b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c b b b b b b b c c c c c c c c b b 
2 2 1 b b b b c c c b b b c c c c c b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b c c c c c c c b b b b b b b b c c c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b c b b b b b b b c c c c c c c c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c c c b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c b b b b b b b c c c c c c c b c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c b b b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b c c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e c c c c c c c c c c e 7 7 7 7 7 7 7 7 7 7 e c c c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c c c c c e 3 3 3 3 3 3 3 3 3 3 e b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e e e e e e e e e e e e 3 3 3 3 3 3 3 3 3 3 e b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e b b c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 e b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e e e e e e e e e e e e 3 3 3 3 3 3 3 3 3 3 e b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b c c c c c c b c e 3 3 3 3 3 3 3 3 3 3 e b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 5 e b b c c c c c b b c e 5 3 3 3 3 3 3 3 3 3 e b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b b c c c c c b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 e b b c c c c c b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b e 3 3 3 3 3 3 3 3 3 5 e b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 5 5 e b c c c c c c b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c c b b b e 5 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e b c c c c c b b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 e c c c c c c b b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b e 3 3 3 3 3 3 3 3 3 5 e b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b e 3 3 3 3 3 3 3 3 3 3 e b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c c b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 5 e c c c c c b b b b b e 5 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 e c c c c c b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 5 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e e e e e e e 3 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 4 3 3 3 3 3 3 3 3 3 3 3 5 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 4 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e e e e e e e 3 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 5 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 5 3 3 3 3 3 e b b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 5 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 5 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 5 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 5 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e e e e e e e e e e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e e e e e e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 5 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 6 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 3 3 3 3 3 3 3 6 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e e e e e e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 5 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 5 e b b b b b b b b b e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 5 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 5 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 5 5 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 5 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 5 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 5 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 3 3 3 3 e b b b b b b b b b e 3 3 3 3 3 3 3 e b b b b b e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 3 3 3 5 3 3 3 3 e f f f f f f f f f e 3 3 3 3 3 3 3 e f f f f f e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 5 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e d d d d d d d d d e 3 3 3 3 3 3 3 e d d d d d e 3 3 3 3 3 3 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 5 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 5 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 e d d d d d d d d d e 7 7 7 7 7 7 7 e d d d d d e 7 7 7 7 7 7 e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d a a a a a a a a e d d d d d d d d d e a a a a a a a e d d d d d e a a a a a a e b b b b b b b b b b e e e b b b b b b e e e b b b b b b b b b b b b b b b b b b b b b b b b b 
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
    // This block adds detail and texture into bland color
    // blocks
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
    scene.setTile(9, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
f f 1 1 1 1 1 1 1 1 1 1 1 f f f 
f f f 1 1 1 1 1 1 1 1 1 f f f f 
f f f f 1 1 1 1 1 1 1 1 f f f f 
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f f f 1 1 1 1 1 f f f f f f 
f f f f f 1 1 1 1 1 f f f f f f 
f f f f f f 1 1 1 f f f f f f f 
f f f f f f f 1 f f f f f f f f 
f f f f f f f 1 f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.platform4, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Ninja_Dave.setPosition(checkpoint_x, checkpoint_y)
    Ninja_Dave.say("AAAHHH", 2000)
    pause(100)
})
scene.onHitTile(SpriteKind.platform4, 14, function (sprite) {
    platform4.vx = 0 - platform4.vx
})
function key_3_delete () {
    if (Ninja_Dave.overlapsWith(key_3)) {
        key_3.destroy(effects.fire, 500)
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
`, false)
        info.changeScoreBy(100)
        game.splash(" LEADER AWARD COLLECTED ", "This award focuses on local, district/regional, state, and national involvement; advanced business skills; and community leadership. Names of qualifying students and pins will be sent to the state chair/adviser to be presented at the state leadership conference, if desired.")
        checkpoint_x = 867
        checkpoint_y = 393
        bpm = 275
    }
}
function _1key () {
    key_1 = sprites.create(img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . 2 . . 5 5 5 . . . . . . . 
. . . 2 . 5 . . . 5 . . 2 2 2 . 
. . . . . 5 . . . 5 . 2 2 . . . 
. 2 2 2 . 5 . . . 5 . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . 2 . . . 5 . . . 2 . . . . 
. . 2 2 . . . 5 . . . 2 2 . . . 
. . 2 . . 5 5 5 . 2 . . 2 . . . 
. . . . . . . 5 . . 2 . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 . . . . . . . . 
`, SpriteKind.Player)
    key_1.setPosition(279, 950)
    key_1.setKind(SpriteKind.key1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key4, function (sprite, otherSprite) {
    key_four()
})
function platform_2 () {
    platform_two = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 1 . . . . 1 . . . . 1 . . 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. f f f f f f f f f f f f f f f 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. f f f f f f f f f f f f f f f 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. . . 1 . . . . 1 . . . . 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.platform2)
    platform_two.vx = 50
    platform_two.setPosition(620, 880)
}
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    info.changeLifeBy(-1)
    Ninja_Dave.setPosition(checkpoint_x, checkpoint_y)
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
    if (last_level == 1) {
        animation.runImageAnimation(
        Ninja_Dave,
        [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . 5 . . f 8 8 8 . . . . . . 
. . . 5 8 8 8 f 8 8 8 8 8 d . . 
. 5 . 8 5 . 8 8 f 8 . . . . . . 
. 5 . d 5 . 8 8 8 f . . . . . . 
. 5 . . . 5 8 8 8 8 8 . . . . . 
. 5 . . . 5 8 8 8 1 1 . . . . . 
. . 5 5 . . 5 5 5 5 5 . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . 8 . . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . f 8 8 8 . . . . . . 
. . d 8 8 8 8 f 8 8 8 8 8 d . . 
. 5 . . . . 8 8 f 8 . . . . . . 
. 5 . . . 5 8 8 8 f . . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . . 5 . . 5 5 5 5 5 . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . 5 5 . . f 8 8 8 . . . . . . 
. . d 5 8 8 8 f 8 8 8 8 8 d . . 
5 5 . 5 . . 8 8 f 8 . . . . . . 
5 5 . 5 5 5 8 8 8 f . . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. 5 5 . . 5 8 8 8 1 1 . . . . . 
. 5 . 5 . . 5 5 5 5 5 . . . . . 
. 5 5 . 5 5 8 8 8 8 8 . . . . . 
5 . . . . . . . . . . . . . . . 
`],
        100,
        true
        )
    }
})
function platform_one () {
    platform_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 1 . . . . 1 . . . . 1 . . 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. f f f f f f f f f f f f f f f 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. f f f f f f f f f f f f f f f 
. . 1 1 1 . . 1 1 1 . . 1 1 1 . 
. . . 1 . . . . 1 . . . . 1 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Platform1)
    platform_1.vx = 30
    platform_1.setPosition(828, 696)
}
scene.onHitTile(SpriteKind.platform2, 14, function (sprite) {
    platform_two.vx = 0 - platform_two.vx
})
info.onCountdownEnd(function () {
    main_character()
    effects.blizzard.startScreenEffect()
    platform_one()
    platform_2()
    platform_4()
    background()
    final_level()
    _1key()
    _2key()
    _4key()
    last_level = 0
    info.setLife(3)
    info.setScore(0)
    _3key()
})
function _4key () {
    key_4 = sprites.create(img`
. . . . . . . . 5 5 5 . . . . . 
. . . . . . . . 5 . . . 2 . . . 
. 2 2 2 . . . . 5 5 . . 2 . . . 
. . . 2 2 . . . 5 . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . 2 2 . . . 5 5 5 . . . 2 2 2 
. . 2 . . . 5 . . . 5 . . . . . 
. 2 2 . . . 5 . . . 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . 5 5 5 . . . . . . 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, SpriteKind.Player)
    key_4.setPosition(1178, 776)
    key_4.setKind(SpriteKind.key4)
}
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
}
// This button will make my main character jump
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (last_level == 1) {
        if (Ninja_Dave.isHittingTile(CollisionDirection.Top)) {
            Ninja_Dave.vy = 170
            animation.runImageAnimation(
            Ninja_Dave,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . 5 . . f 8 8 8 . . . . . . 
. . . 5 8 8 8 f 8 8 8 8 8 d . . 
. 5 . 8 5 . 8 8 f 8 . . . . . . 
. 5 . d 5 . 8 8 8 f . . . . . . 
. 5 . . . 5 8 8 8 8 8 . . . . . 
. 5 . . . 5 8 8 8 1 1 . . . . . 
. . 5 5 . . 5 5 5 5 5 . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . . . 8 . . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . f 8 8 8 . . . . . . 
. . d 8 8 8 8 f 8 8 8 8 8 d . . 
. 5 . . . . 8 8 f 8 . . . . . . 
. 5 . . . 5 8 8 8 f . . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. . 5 . . 5 8 8 8 1 1 . . . . . 
. . . 5 . . 5 5 5 5 5 . . . . . 
. . . . 5 5 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 . . 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . 5 5 . . f 8 8 8 . . . . . . 
. . d 5 8 8 8 f 8 8 8 8 8 d . . 
5 5 . 5 . . 8 8 f 8 . . . . . . 
5 5 . 5 5 5 8 8 8 f . . . . . . 
. . 5 . . 5 8 8 8 8 8 . . . . . 
. 5 5 . . 5 8 8 8 1 1 . . . . . 
. 5 . 5 . . 5 5 5 5 5 . . . . . 
. 5 5 . 5 5 8 8 8 8 8 . . . . . 
5 . . . . . . . . . . . . . . . 
`],
            100,
            true
            )
        }
    } else {
        if (Ninja_Dave.isHittingTile(CollisionDirection.Bottom)) {
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
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.signal, function (sprite, otherSprite) {
    last_level = 1
    game.splash("Now entering the drop zone")
    level_4_trigger.destroy(effects.fire, 500)
    Ninja_Dave.ay = -200
    checkpoint_x = 867
    checkpoint_y = 393
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform1, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Ninja_Dave.setPosition(checkpoint_x, checkpoint_y)
    Ninja_Dave.say("AAAHHH", 2000)
    pause(100)
})
function final_level () {
    level_4_trigger = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . . 7 7 7 7 . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . 7 7 7 . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . 7 7 7 . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . . . . 7 7 7 . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . . . . . 7 7 7 . . . . . 7 7 7 7 7 . 7 7 7 . 7 7 7 7 7 . 
. . . . . . . . 7 7 7 . . . . . 7 7 7 7 . . 7 7 7 . . 7 7 7 7 . 
. . . . . . . . 7 7 7 . . . . . 7 7 7 . . . 7 7 7 . . . 7 7 7 . 
. . . . . . . . 7 7 7 . . . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . . 7 7 7 . . . . . . . . . . . 7 7 7 . . . . . . . 
. . 7 7 7 . . . 7 7 7 . . . 7 7 7 . . . . . 7 7 7 . . . . . . . 
. . 7 7 7 7 . . 7 7 7 . . 7 7 7 7 . . . . . 7 7 7 . . . . . . . 
. . 7 7 7 7 7 . 7 7 7 . . 7 7 7 7 . . . . . 7 7 7 . . . . . . . 
. . . 7 7 7 7 . 7 7 7 . 7 7 7 7 . . . . . . 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . 7 7 7 . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 7 7 7 . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . 7 7 7 7 7 7 . . . . . . . . . 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.signal)
    level_4_trigger.setPosition(973, 385)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key1, function (sprite, otherSprite) {
    key_1_delete()
})
let level_4_trigger: Sprite = null
let platform_two: Sprite = null
let last_level = 0
let key_1: Sprite = null
let key_3: Sprite = null
let key_4: Sprite = null
let platform4: Sprite = null
let key_2: Sprite = null
let checkpoint_y = 0
let checkpoint_x = 0
let Ninja_Dave: Sprite = null
let platform_1: Sprite = null
let bpm = 0
new_sprites()
intro()
game.splash("Starting in 3 seconds")
info.startCountdown(3)
bpm = 200
forever(function () {
    music.playMelody("C D C E G E A G ", bpm)
    music.playMelody("E G D D C G E D ", bpm)
    music.playMelody("A D G F G C G D ", bpm)
})
