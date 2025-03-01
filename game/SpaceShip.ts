import { SCREEN_WIDTH, SCREEN_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_SPEED, BULLET_SPEED, BULLET_COOLDOWN } from './constants';

export class SpaceShip {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    bullets: { x: number; y: number }[];
    private bulletCooldown: number;

    constructor() {
        this.position = { x: SCREEN_WIDTH / 2 - PLAYER_WIDTH / 2, y: SCREEN_HEIGHT - PLAYER_HEIGHT - 50 }; // Center-bottom dynamically
        this.velocity = { x: 0, y: 0 };
        this.bullets = [];
        this.bulletCooldown = 0;
    }

    move(direction: 'left' | 'right' | 'up' | 'down') {
        if (direction === 'left') this.velocity.x = -PLAYER_SPEED;
        if (direction === 'right') this.velocity.x = PLAYER_SPEED;
        if (direction === 'up') this.velocity.y = -PLAYER_SPEED;
        if (direction === 'down') this.velocity.y = PLAYER_SPEED;
    }

    stop() {
        this.velocity = { x: 0, y: 0 };
    }

    shoot() {
        if (this.bulletCooldown === 0) {
            this.bullets.push({ x: this.position.x + PLAYER_WIDTH / 2 - 2, y: this.position.y }); // Center bullet
            this.bulletCooldown = BULLET_COOLDOWN;
        }
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Keep player within screen boundaries
        this.position.x = Math.max(0, Math.min(SCREEN_WIDTH - PLAYER_WIDTH, this.position.x));
        this.position.y = Math.max(0, Math.min(SCREEN_HEIGHT - PLAYER_HEIGHT, this.position.y));

        // Move bullets upwards
        this.bullets = this.bullets.map(bullet => ({ x: bullet.x, y: bullet.y - BULLET_SPEED }))
                                   .filter(bullet => bullet.y > 0);

        if (this.bulletCooldown > 0) {
            this.bulletCooldown--;
        }
    }
}
