import { Dimensions } from 'react-native';

// Get dynamic screen size
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

 const PLAYER_WIDTH = 50;
 const PLAYER_HEIGHT = 50;
 const PLAYER_SPEED = 5;
 const BULLET_SPEED = 10;
 const BULLET_COOLDOWN = 20;

 const ENEMY_SPEED = 2;
 const ENEMY_SPAWN_RATE = 50;
 const ENEMY_WIDTH = 30;
 const ENEMY_HEIGHT = 30;

export {SCREEN_HEIGHT, SCREEN_WIDTH, PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_SPEED, BULLET_SPEED, BULLET_COOLDOWN, ENEMY_SPEED, ENEMY_SPAWN_RATE, ENEMY_WIDTH, ENEMY_HEIGHT}

