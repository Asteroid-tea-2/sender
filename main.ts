input.onButtonPressed(Button.A, function () {
    speed += 1
    radio.sendValue("speed", speed)
})
input.onButtonPressed(Button.AB, function () {
    speed = 0
    radio.sendValue("speed", speed)
})
input.onButtonPressed(Button.B, function () {
    speed += -1
    radio.sendValue("speed", speed)
})
let speed = 0
radio.setGroup(181)
speed = 0
basic.showString("BSHLMC")
basic.forever(function () {
    radio.sendValue("degree", input.rotation(Rotation.Roll))
})
