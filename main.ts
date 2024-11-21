radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # . . #
            . # . . #
            . # # # .
            `)
        basic.clearScreen()
        basic.pause(100)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
    }
})
let sıcaklık = 0
basic.clearScreen()
basic.forever(function () {
    sıcaklık = input.temperature()
    if (sıcaklık >= 34) {
        radio.sendNumber(0)
    }
    if (sıcaklık <= 10) {
        radio.sendNumber(1)
    }
    if (sıcaklık == 20) {
        radio.sendNumber(2)
    }
})
