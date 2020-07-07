function checkPit () {
    if (hX - 1 == pX || hX + 1 == pX) {
        images.iconImage(IconNames.Square).scrollImage(1, 200)
    }
    if (hX == pX) {
        images.iconImage(IconNames.Meh).scrollImage(1, 200)
        basic.showString("You fell in a pit!")
        end()
    }
}
function printconsole () {
    basic.showString("w")
    basic.showString("" + (wX))
    basic.pause(1000)
    basic.showString("p")
    basic.showString("" + (pX))
    basic.pause(1000)
    basic.showString("b1")
    basic.showString("" + (b1X))
    basic.pause(1000)
    basic.showString("b2")
    basic.showString("" + (b2X))
    basic.pause(1000)
    basic.showString("h")
    basic.showString("" + (hX))
}
// MAIN LOOP
// move left
input.onButtonPressed(Button.A, function () {
    if (!(hunting)) {
        // not hunting, move left
        hX += -1
        wrapAround()
        if (hX == wX) {
            images.iconImage(IconNames.Skull).scrollImage(1, 200)
            basic.showString("You were eaten!")
            end()
        }
    } else {
        // hunt left
        basic.showArrow(ArrowNames.West)
        if (hX - 1 == wX) {
            images.iconImage(IconNames.Happy).scrollImage(1, 200)
            basic.showString("You've won!")
        } else {
            images.iconImage(IconNames.Skull).scrollImage(1, 200)
            basic.showString("You were eaten!")
        }
        end()
    }
    main()
})
function end () {
    basic.pause(500)
    control.reset()
}
// move right
input.onButtonPressed(Button.B, function () {
    if (!(hunting)) {
        // not hunting, move right
        hX += 1
        wrapAround
if (hX == wX) {
            images.iconImage(IconNames.Skull).scrollImage(1, 200)
            basic.showString("You were eaten!")
            end()
        }
    } else {
        // hunt right
        basic.showArrow(ArrowNames.East)
        if (hX + 1 == wX) {
            images.iconImage(IconNames.Happy).scrollImage(1, 200)
            basic.showString("You've won!")
        } else {
            images.iconImage(IconNames.Skull).scrollImage(1, 200)
            basic.showString("You were eaten!")
        }
        end()
    }
    main()
})
// load an arrow
input.onGesture(Gesture.Shake, function () {
    hunting = true
})
function wrapAround () {
    if (hX < 0) {
        hX = 12
    }
    if (hX > 12) {
        hX = 0
    }
}
function checkWumpus () {
    if (hX - 1 == wX || hX + 1 == wX) {
        images.iconImage(IconNames.Chessboard).scrollImage(1, 200)
    }
}
function checkBat () {
    if (hX == b1X || hX == b2X) {
        images.iconImage(IconNames.Angry).scrollImage(1, 200)
        images.iconImage(IconNames.SmallDiamond).showImage(0)
        // TODO: move bat first
        // drop player somewhere
        while (hX == wX || hX == pX || hX == b1X || hX == b2X) {
            hX = randint(0, 11)
        }
    }
}
function main () {
    images.iconImage(IconNames.StickFigure).showImage(0)
    checkBat()
    checkPit()
    checkWumpus()
    printconsole()
}
let hunting = false
let hX = 0
let b2X = 0
let b1X = 0
let wX = 0
let pX = 0
let dungeon = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
// pit
pX = randint(0, 11)
dungeon[pX] = "h"
wX = randint(0, 11)
while (wX == pX) {
    // wumpus
    wX = randint(0, 11)
}
// bat1
b1X = randint(0, 11)
while (b1X == pX || b1X == wX) {
    b1X = randint(0, 11)
}
// bat2
b2X = randint(0, 11)
while (b2X == pX || b2X == wX || b2X == b1X) {
    b2X = randint(0, 11)
}
// hunter
hX = randint(0, 11)
while (hX == pX || hX == wX || hX == b1X || hX == b2X) {
    hX = randint(0, 11)
}
images.iconImage(IconNames.Heart).scrollImage(1, 200)
images.iconImage(IconNames.StickFigure).showImage(0)
