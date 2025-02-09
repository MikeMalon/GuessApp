import { Text, View, SafeAreaView, Alert } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ guessNumber, gameOver }) {
  const initalGuess = getRandomNumber(1, 100, guessNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  useEffect(() => {
    if (currentGuess === guessNumber) {
      gameOver(true);
    }
  }, [currentGuess, guessNumber, gameOver]);

  function getRandomNumber(minBoundary, maxBoundary, exclude = null) {
    let randomNumber;

    do {
      randomNumber =
        Math.floor(Math.random() * (maxBoundary - minBoundary + 1)) +
        minBoundary;
    } while (randomNumber === exclude);

    return randomNumber;
  }

  function nextHandlerGuess(direction) {
    if (
      (direction == "lower" && currentGuess < guessNumber) ||
      (direction == "higher" && currentGuess > guessNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = getRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={nextHandlerGuess.bind(this, "higher")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextHandlerGuess.bind(this, "lower")}>
          -
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
