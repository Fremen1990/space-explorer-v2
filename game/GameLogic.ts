import { SpaceShip } from './SpaceShip';
import { SCREEN_WIDTH, SCREEN_HEIGHT, ENEMY_SPEED, ENEMY_SPAWN_RATE, ENEMY_WIDTH, ENEMY_HEIGHT } from './constants';

export class GameLogic {
    private spaceship: SpaceShip;
    private enemies: { x: number; y: number }[];
    private enemySpawnTimer = 0;

    constructor() {
        this.spaceship = new SpaceShip();
        this.enemies = [];
    }

    getPlayerPosition() {
        return this.spaceship.position;
    }

    getBullets() {
        return this.spaceship.bullets;
    }

    getEnemies() {
        return this.enemies;
    }

    movePlayer(direction: 'left' | 'right' | 'up' | 'down') {
        this.spaceship.move(direction);
    }

    stopPlayer() {
        this.spaceship.stop();
    }

    shootBullet() {
        this.spaceship.shoot();
    }

    spawnEnemy() {
        const enemyX = Math.random() * (SCREEN_WIDTH - ENEMY_WIDTH);
        this.enemies.push({ x: enemyX, y: 0 });
    }

    updateGame() {
        this.spaceship.update();

        // Move enemies downward
        this.enemies = this.enemies.map(enemy => ({ x: enemy.x, y: enemy.y + ENEMY_SPEED }))
                                  .filter(enemy => enemy.y < SCREEN_HEIGHT);

        this.enemySpawnTimer++;
        if (this.enemySpawnTimer >= ENEMY_SPAWN_RATE) {
            this.spawnEnemy();
            this.enemySpawnTimer = 0;
        }

        // Check for collisions
        this.enemies = this.enemies.filter(enemy => {
            return !this.spaceship.bullets.some(bullet => {
                const hit = Math.abs(bullet.x - enemy.x) < ENEMY_WIDTH / 2 && Math.abs(bullet.y - enemy.y) < ENEMY_HEIGHT / 2;
                return hit;
            });
        });
    }
}
