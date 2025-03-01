export class GameLogic {
    private playerPosition = { x: 400, y: 300 };
    private bullets: { x: number; y: number }[] = [];
    private enemies: { x: number; y: number }[] = [];

    constructor() {}

       // ✅ Public getter to allow access
       public getPlayerPosition() {
        return this.playerPosition;
    }

    movePlayer(direction: 'left' | 'right' | 'up' | 'down') {
        const speed = 10;
        if (direction === 'left') this.playerPosition.x -= speed;
        if (direction === 'right') this.playerPosition.x += speed;
        if (direction === 'up') this.playerPosition.y -= speed;
        if (direction === 'down') this.playerPosition.y += speed;
    }

    shootBullet() {
        this.bullets.push({ x: this.playerPosition.x, y: this.playerPosition.y });
    }

    spawnEnemy() {
        this.enemies.push({ x: Math.random() * 800, y: 0 });
    }

    updateGame() {
        // Move bullets upwards
        this.bullets = this.bullets.map(bullet => ({ x: bullet.x, y: bullet.y - 5 }));

        // Move enemies downward
        this.enemies = this.enemies.map(enemy => ({ x: enemy.x, y: enemy.y + 2 }));

        // Check collisions
        this.enemies = this.enemies.filter(enemy => !this.bullets.some(bullet => Math.abs(bullet.x - enemy.x) < 20 && Math.abs(bullet.y - enemy.y) < 20));
    }
}
