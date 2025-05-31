import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import { AppLoading } from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  const [loadedFonts] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  function handleUserNumber(number) {
    console.log("Number received from StartGameScreen:", number); // Verifica qué llega
    setUserNumber(number);
    setGameOver(false);
  }

  function handleNewGame() {
    setUserNumber(null);
    setGameOver(false);
  }

  console.log("userNumber:", userNumber);
  let screen = <StartGameScreen handlerValue={handleUserNumber} />;
  if (userNumber) {
    screen = <GameScreen guessNumber={userNumber} gameOver={setGameOver} />;
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen number={userNumber} onNewGame={handleNewGame} />;
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
