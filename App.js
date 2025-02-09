import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [newGame, setNewGame] = useState(true);

  function handleUserNumber(number) {
    console.log("Number received from StartGameScreen:", number); // Verifica qué llega
    setUserNumber(number);
  }

  let screen = <StartGameScreen handlerValue={handleUserNumber} />;
  if (userNumber) {
    screen = <GameScreen guessNumber={userNumber} gameOver={setGameOver} />;
  }
  if (gameOver) {
    screen = <GameOverScreen number={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.screen}
    >
      <ImageBackground
        source={require("./assets/images/adaptive-icon.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
