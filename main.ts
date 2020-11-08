input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (red) {
        light.setAll(0x007fff)
        crickit.setPixelColor(0x007fff)
        red = 0
    } else {
        light.setAll(0xff0000)
        red = 1
        serial.writeLine("red")
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (red) {
        light.setAll(0x00ff00)
        red = 0
    } else {
        light.setAll(0xff8000)
        red = 1
    }
})
function mark (bool: boolean) {
	
}
let red = 0
music.baDing.play()
