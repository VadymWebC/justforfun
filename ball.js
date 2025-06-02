class Ball {
	constructor(track, radius, speed) {
		this.track = track
		this.radius = radius
		this.speed = speed
		this.offset = 0
		this.center = this.track.getPosition(this.offset)
	}
}
