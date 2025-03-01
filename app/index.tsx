import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, PanResponder, Image } from 'react-native';
import { GameEngine, GameEngineUpdateEventOptionType } from 'react-native-game-engine';
import { GameLogic } from '../game/GameLogic';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '@/game/constants';


import SPACESHIP from "@/assets/images/spaceship-small.png"

const SPACESHIP_IMAGE = Image.resolveAssetSource(SPACESHIP).uri

type Entity = {
    position: { x: number; y: number };
    renderer: React.FC<{ position: { x: number; y: number } }>;
};

const gameLogic = new GameLogic();

const updateGame = (entities: { [key: string]: Entity }, { time }: GameEngineUpdateEventOptionType) => {
    gameLogic.updateGame();
    entities.player.position = gameLogic.getPlayerPosition();

    gameLogic.getBullets().forEach((bullet, index) => {
        entities[`bullet-${index}`] = {
            position: bullet,
            renderer: BulletRenderer
        };
    });

    gameLogic.getEnemies().forEach((enemy, index) => {
        entities[`enemy-${index}`] = {
            position: enemy,
            renderer: EnemyRenderer
        };
    });

    return entities;
};

// 🎮 Space Ship Renderer (Now uses an image)
const PlayerRenderer: React.FC<{ position: { x: number; y: number } }> = ({ position }) => (
    <Image source={{uri: SPACESHIP_IMAGE}} style={[styles.player, { left: position.x, top: position.y }]} />
);

const BulletRenderer: React.FC<{ position: { x: number; y: number } }> = ({ position }) => (
    <View style={[styles.bullet, { left: position.x, top: position.y }]} />
);

const EnemyRenderer: React.FC<{ position: { x: number; y: number } }> = ({ position }) => (
    <View style={[styles.enemy, { left: position.x, top: position.y }]} />
);

const GameScreen = () => {
    const [running, setRunning] = useState(true);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
            if (gesture.dx < 0) gameLogic.movePlayer('left');
            if (gesture.dx > 0) gameLogic.movePlayer('right');
            if (gesture.dy < 0) gameLogic.movePlayer('up');
            if (gesture.dy > 0) gameLogic.movePlayer('down');
        },
        onPanResponderRelease: () => gameLogic.stopPlayer()
    });

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <GameEngine
                systems={[updateGame]}
                entities={{
                    player: { position: gameLogic.getPlayerPosition(), renderer: PlayerRenderer },
                    bullets: [],
                    enemies: []
                }}
                running={running}
            />
            <TouchableOpacity onPress={() => gameLogic.shootBullet()} style={styles.button}>
                <Text style={styles.buttonText}>Shoot</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    player: { position: 'absolute', width: PLAYER_WIDTH, height: PLAYER_WIDTH },
    bullet: { position: 'absolute', width: 5, height: 10, backgroundColor: 'yellow' },
    enemy: { position: 'absolute', width: 30, height: 30, backgroundColor: 'red' },
    button: { position: 'absolute', bottom: 50, left: '50%', transform: [{ translateX: -50 }], padding: 10, backgroundColor: 'white' },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: 'black' }
});

export default GameScreen;
