import InputHandler from "./inputHandler.js";

export default class Player {
    constructor(ctx, upKey, leftKey, rightKey) {
        this.ctx = ctx;
        this.gameWidth = this.ctx.canvas.width
        this.gameHeight = this.ctx.canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = 0
        this.weigth = 1;
        // this.maxSpeed = 10

        this.x = 0;
        this.y = this.gameHeight - this.height;
        this.vy = 0;
        // this.xv = 0;
        this.decl = 0.3;
        this.upKey = upKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey

        this.inputHandler = new InputHandler(this.upKey, this.leftKey, this.rightKey);
    }

    update() {
        if (this.inputHandler.activeKeys.includes(this.rightKey)) {
            this.speed = 6
            this.decl = Math.abs(this.decl)
        }
        else if (this.inputHandler.activeKeys.includes(this.leftKey)) {
            this.speed = -6
            this.decl = -Math.abs(this.decl)
        }
        else if (this.onGround()) {
            if (this.decl < 0) this.speed = Math.min(0, this.speed - this.decl)
            else this.speed = Math.max(0, this.speed - this.decl)
        }

        if (this.inputHandler.activeKeys.includes(this.upKey) && this.onGround()) {
            this.vy -= 52
        }

        // horizontal movement
        this.x += this.speed;
        if (this.x < 0) this.x = 0;
        else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width

        // vertical movement
        this.y = Math.max(0, this.y + this.vy)
        if (this.y === 0) this.vy = 0

        if (!this.onGround()) this.vy += this.weigth;
        else this.vy = 0

        if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    onGround() {
        return this.y >= this.gameHeight - this.height
    }
}