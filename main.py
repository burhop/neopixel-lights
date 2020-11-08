def on_button_a_click():
    global red
    if red:
        light.set_all(0x007fff)
        red = 0
    else:
        light.set_all(0xff0000)
        red = 1
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_button_b_click():
    global red
    if red:
        light.set_all(0x00ff00)
        red = 0
    else:
        light.set_all(0xff8000)
        red = 1
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

red = 0
music.ba_ding.play()