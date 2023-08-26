export default class InputHandler {
    constructor(...keys) {
        this.keys = keys;
        this.activeKeys = []

        window.addEventListener('keydown', (e) => {
            const pressedKey = e.key
            if (keys.includes(pressedKey) && !this.activeKeys.includes(pressedKey)) {
                this.activeKeys.push(pressedKey)
            }
        });
        
        window.addEventListener('keyup', (e) => {
            const releasedKey = e.key
            if (keys.includes(releasedKey)) {
                this.activeKeys.splice(this.activeKeys.indexOf(releasedKey), 1)
            }
        });
    }
}