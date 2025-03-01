import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GameEngine, GameEngineUpdateEventOptionType } from 'react-native-game-engine';
import { GameLogic } from '../game/GameLogic';

type Entity = {
    position: { x: number; y: number };
    renderer: React.FC<any>;
};

const gameLogic = new GameLogic();

const updateGame = (entities: { [key: string]: Entity }, { time }: GameEngineUpdateEventOptionType) => {
    gameLogic.updateGame();
    entities.player.position = gameLogic.getPlayerPosition(); 
};

const PlayerRenderer: React.FC<{ position: { x: number; y: number } }> = ({ position }) => (
    <View style={[styles.player, { left: position.x, top: position.y }]} />
);

const GameScreen = () => {
    return (
        <View style={styles.container}>
            <GameEngine
                              systems={[updateGame]}

                              entities={{
                                player: { position: gameLogic.getPlayerPosition(), renderer: PlayerRenderer }
                            }}
                running={true}
            />
            <TouchableOpacity onPress={() => gameLogic.shootBullet()} style={styles.button}>
                <Text style={styles.buttonText}>Shoot</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    player: { position: 'absolute', width: 50, height: 50, backgroundColor: 'blue' },
    button: { position: 'absolute', bottom: 50, left: '50%', transform: [{ translateX: -50 }], padding: 10, backgroundColor: 'white' },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: 'black' }
});

export default GameScreen;
