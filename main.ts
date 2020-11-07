KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
    radio.sendString("11")
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    radio.sendString("12")
})
KSB045.onBtnChanged(KSB045.btnName.SW, KSB045.pushType.down, function () {
    radio.sendNumber(0)
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    radio.sendString("14")
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
    radio.sendString("13")
})
radio.setGroup(20)
radio.setTransmitPower(7)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) <= 250) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 250 && KSB045.getJoystickValue(KSB045.valueType.X) <= 450) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # . #
            . # . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 550 && KSB045.getJoystickValue(KSB045.valueType.X) <= 750) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # . # . #
            . . . # .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 750) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.Y) <= 250) {
        radio.sendNumber(5)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 250 && KSB045.getJoystickValue(KSB045.valueType.Y) <= 450) {
        radio.sendNumber(6)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . . . .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 550 && KSB045.getJoystickValue(KSB045.valueType.Y) <= 750) {
        radio.sendNumber(7)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 750) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
