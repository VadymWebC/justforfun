class Track {
	constructor(center, radius) {
		this.center = center
		this.radius = radius
		this.period = Math.PI
	}

	getPosition(offset) {
		return {
			x: this.center.x + Math.cos(offset) * this.radius,
			y: this.center.y - Math.sin(offset) * this.radius,
			round: Math.floor(offset / this.period),
		}
	}

	draw(ctx) {
		ctx.beginPath()
		//ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)

		for (let a = 0; a < Math.PI * 2; a += 0.01) {
			const pos = this.getPosition(a)
			ctx.lineTo(pos.x, pos.y)
		}
		ctx.closePath()
		ctx.strokeStyle = "white"
		ctx.stroke()
	}
}
