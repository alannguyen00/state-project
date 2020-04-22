namespace SpriteKind {
    export const Platform1 = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Platform1, 14, function (sprite) {
    platform_1.vx = 0 - platform_1.vx
})
function main_character () {
    controller.moveSprite(Ninja_Dave, 100, 0)
    Ninja_Dave.ay = 200
    Ninja_Dave.setPosition(10, 0)
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
    game.showLongText("Climb your way to victory!", DialogLayout.Center)
    game.showLongText("         Be careful as the platforms WILL disappear!", DialogLayout.Center)
    pause(500)
    game.showLongText("        Use the LEFT and RIGHT buttons to move", DialogLayout.Center)
    game.showLongText("         Use the A button to jump your way to victory!", DialogLayout.Center)
}
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
2 2 1 b b b b b b b b b b c c c c c b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c c c b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c c b c c c c c c c c c c c c c c c b b b b b b b b b c c c c c b b b b b b b c c c c c b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b c c c c c c b c c c c c c c c c c c c c c c c b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c b b b b b b b b b b c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c b b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c b c c c c c c c b b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c b b c c c c c c c c b b b b b b c c c c c c b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b c c c c c c c b b b b b b c c c c c b b b b b b b b b c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b c c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b c c c c c c b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b c c c c c b b b b b b b b c c c c c c b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e e e e e e 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 1 b b b b b b b b b e 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
2 2 b b b b b b b b b b b 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 3 3 3 3 3 3 3 3 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 3 3 3 3 3 3 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 7 7 7 7 7 7 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d 9 a a a a a a 4 e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
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
    scene.setTile(9, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 f f f f f f f f f f f f f f f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
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
    scene.setTile(4, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
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
    platform_1.setPosition(332, 1000)
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
    Ninja_Dave.setFlag(SpriteFlag.ShowPhysics, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Ninja_Dave.vy = -170
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
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform1, function (sprite, otherSprite) {
    sprite.bottom = otherSprite.top - 1
})
let shuriken: Sprite = null
let Ninja_Dave: Sprite = null
let platform_1: Sprite = null
new_sprites()
intro()
main_character()
background()
platform_one()
info.setLife(3)
