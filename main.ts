scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    Ninja_Dave.say("Where am I?", 2000)
})
function main_character () {
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
    controller.moveSprite(Ninja_Dave, 100, 0)
    Ninja_Dave.ay = 200
    Ninja_Dave.setPosition(10, 0)
    info.setLife(3)
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
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    weapon()
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
    false
    )
})
function background () {
    scene.setTileMap(img`
c c c c c c c c c c c c e e e e e e e e e e c c c 
c c c c c c c c c c c c e 3 3 3 3 3 3 3 3 e c c c 
c c c c c c c c c c c c e 3 3 3 3 3 3 3 3 e c c b 
c c c c c c c c b b b b e 3 3 3 3 3 3 3 3 e b b b 
c c c c c c b c c b b b e 3 3 3 3 3 5 3 3 e b c c 
b c c c c c b b c c c b e 3 3 3 3 3 3 3 3 e b c c 
b c c c c b b b c c c b e 3 5 3 3 3 3 3 3 e c c c 
b c c c b b b b c c c b e 3 3 3 3 3 3 3 3 e c c c 
b c c c c b b c c c c b e 3 3 3 3 3 3 3 3 e c c c 
c c c c c b b c c c c b e 3 3 3 3 3 3 5 3 e b b b 
c c c c c b c c c c c b e 3 3 3 3 3 3 3 3 e b b b 
c c c c c b c c c c b b e 3 3 3 5 3 3 3 3 e b b b 
b c c c c b c c c c b b e 3 3 3 3 3 3 3 3 e b b b 
b c c c c b b b b b b b e 3 3 3 3 3 3 3 5 e b b b 
b c c c c b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
c c c c c b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
c c c b b b b b b b b b e 3 3 3 3 5 3 3 3 e b b b 
c c c b b b b b b b b b e 3 5 3 3 3 3 3 3 e b b b 
c c c b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b 
b b b b b b b b b b b b e 3 3 3 3 5 3 3 3 e b b b 
b b b b b b b b b b b b e 5 5 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b 
b b b b b b b b b b b b e 5 5 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 5 5 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 5 e b b b 
b b b b b b b b b b b b e 3 5 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 5 3 3 3 3 3 5 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 5 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 5 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 5 5 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b e 3 3 3 3 3 3 5 5 e b b b 
b b b b b b b b b b b b 4 3 3 3 3 3 3 3 3 e b b b 
b b b b b b b b b b b b 4 3 3 3 3 3 3 3 3 e b b b 
9 9 f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.cameraFollowSprite(Ninja_Dave)
    scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 1 f f 
f f 1 f f f f f f 1 f f f f 1 f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f f f f f f f f f f f f f f 1 f 
f f f f f f f f 1 1 f f f f 1 f 
f f f f f f f 1 f f 1 f f 1 f f 
f f 1 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f 1 1 f f f f 1 f f 1 1 f f f f 
f 1 f f f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(9, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 1 f f 
f f 1 f f f f f f 1 f f f f 1 f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f f f f f f f f f f f f f f 1 f 
f f f f f f f f 1 1 f f f f 1 f 
f f f f f f f 1 f f 1 f f 1 f f 
f f 1 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f 
f 1 1 f f f f 1 f f 1 1 f f f f 
f 1 f f f f f f f f 1 f f f f f 
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
    scene.setTile(4, img`
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
f f f e e e e e e e e e e e e e 
`, false)
}
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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Ninja_Dave.vy = -150
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
let shuriken: Sprite = null
let Ninja_Dave: Sprite = null
main_character()
background()
Ninja_Dave.say("AAAHHHH!")
