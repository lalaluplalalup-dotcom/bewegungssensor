radio.setGroup(1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendNumber(0)
    }
})
