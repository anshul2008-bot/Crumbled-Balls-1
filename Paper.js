class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
     display() {
    //     if (keyDown(LEFT_ARROW)) {
    //         changePosition(-1, 0);
    //     }

    //     if (keyDown(RIGHT_ARROW)) {
    //         changePosition(1, 0);
    //     }

    //     if (keyDown(UP_ARROW)) {
    //         changePosition(0, -1);
    //     }

    //     if (keyDown(DOWN_ARROW)) {
    //         changePosition(0, 1);
    //     }

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        fill("purple");
        ellipse(0,0, this.radius);
        pop();
    }

    // changePosition(x, y) {
  
    // }
}