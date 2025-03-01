# 🚀 Space Explorer - React Native + Phaser + TypeScript
A 2D space shooter game built with **React Native (Expo) + Phaser.js** in TypeScript, with a future upgrade path to **Three.js** for a full 3D experience.

## 📌 **Project Structure**

```
📁 space-explorer
 ├── 📁 game              # 📌 Shared game logic (works for Web & Mobile)
 │    ├── GameLogic.ts    # 🚀 Common game logic (movement, shooting, collision)
 │    ├── GameObjects.ts  # 🎨 Shared game objects (player, enemies, bullets)
 │    ├── systems.ts      # 🏗️ Game systems (physics, AI, etc.)
 ├── 📁 assets            # 🎨 Game assets (images, sounds, etc.)
 │    ├── spaceship.png
 ├── 📁 web               # 🌐 Web-only Phaser setup
 │    ├── index.html      # 📜 Web entry point for Phaser
 │    ├── phaserGame.ts   # 🕹️ Phaser integration (Uses `game/GameLogic.ts`)
 ├── 📁 app               # 📱 React Native App (Mobile & Web)
 │    ├── index.tsx       # 📱 Mobile (react-native-game-engine)
 │    ├── index.web.tsx   # 🌐 Web (Phaser inside React Native Web)
 ├── package.json         # 📦 Project dependencies
 ├── app.json             # ⚙️ React Native configuration
```

---

## 📦 **Installation & Setup**

### 1️⃣ Install dependencies

```bash
bun x create-expo-app space-explorer --template with-typescript
cd space-explorer
bun install


bun install react-native-webview @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs firebase
```


3️⃣ Start the project

```bash
npx expo start
```

----

## 📍 Development Roadmap

### ✅ Phase 1: Project Setup

 Set up React Native + TypeScript + Expo.
 Phaser.js.
 Create Phaser.js game entry (index.html + main.ts).
 Embed Phaser in React Native WebView.

----

### 🏗 Phase 2: Core Game Mechanics

### 🎮 Basic Gameplay
 Add spaceship movement (touch-based).
 Implement shooting mechanic (tap to fire bullets).
 Spawn asteroids and enemies.
 Implement collision detection (player vs enemies).
 Add health system (lives/HP).

### 🎨 Graphics & UI
 Improve spaceship & asteroid animations.
 Add explosions & particle effects.
 Create a main menu UI.

---


### 📲 Phase 3: Mobile App Features

### 🔗 Navigation

 Add React Navigation (stack & tab navigation).
 Create screens:
 Game Screen
 Leaderboard
 Settings
 Profile
 Login/Signup

### 🔑 Authentication

 Integrate Firebase authentication.
 Allow user registration & login.
 Store user progress in Firebase Firestore.

### 📊 Leaderboard & Scores
 Implement score tracking.
 Display global leaderboard (Firebase).
 Store user progress (levels, points, power-ups).

 -----

###  🌟 Phase 4: Advanced Game Features
### 🚀 Space Exploration Mode
 Add multiple levels (different planets).
 Introduce new enemy types.
 Create missions & achievements.
 Upgrade system for weapons & shields.

### 🔥 Power-Ups & Special Abilities
 Implement power-ups (shields, faster bullets).
 Add enemy AI behavior (chasing, attacking).
 Introduce boss fights.

 -----


 ### 🌌 Phase 5: Upgrade to 3D (Three.js)
 Replace Phaser.js with Three.js (expo-three).
 Implement 3D spaceship models & movement.
 Create open-world space exploration.
 Add multiplayer using WebSockets.
 Optimize performance for mobile devices.


 ----

### 👨‍💻 Contributing
If you'd like to contribute, feel free to fork the repo and submit a pull request! 🚀

-----

### 📜 License
MIT License. Free to use and modify.


----


### 🎮 Screenshots & Previews
(Coming Soon)


----

## Build App on devices 

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).