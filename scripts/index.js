import Player from "./player.js";
import InputHandler from "./inputHandler.js";

window.addEventListener("load", () => {
    
    /**@type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = 1000
    const CANVAS_HEIGHT = canvas.height = 700

    const player1 = new Player(ctx, "w", "a", "d")
    const player2 = new Player(ctx, "ArrowUp", "ArrowLeft", "ArrowRight")
    // const inputHandler = new InputHandler("a","b")
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player1.update();
        player1.draw();
        player2.update();
        player2.draw();
        requestAnimationFrame(animate);
    }

    animate()
});
