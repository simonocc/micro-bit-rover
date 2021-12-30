function LineTracking () {
    trackingValues = Rover.LineTracking()
    if (trackingValues == 2 || trackingValues == 5) {
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        Rover.Move(trackingSpeed)
    } else if (trackingValues == 4 || trackingValues == 6) {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.MotorRunDual(speedSlowSide, speedFastSide)
    } else if (trackingValues == 1 || trackingValues == 3) {
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        Rover.MotorRunDual(speedFastSide, speedSlowSide)
    } else {
        Rover.setALLRGB(Rover.colors(RoverColors.Black))
        Rover.MotorStopAll(MotorActions.Stop)
    }
}
// Play Suo-gan
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.QuarterNote)
    Rover.setALLRGB(Rover.colors(RoverColors.Purple))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    Rover.setALLRGB(Rover.colors(RoverColors.White))
})
input.onButtonPressed(Button.B, function () {
	
})
let trackingValues = 0
let speedFastSide = 0
let speedSlowSide = 0
let trackingSpeed = 0
basic.showIcon(IconNames.Happy)
trackingSpeed = 110
speedSlowSide = 25
speedFastSide = 110
basic.forever(function () {
    LineTracking()
})
