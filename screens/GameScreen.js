import { Text, View, SafeAreaView, Alert } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstruccionText";
import { Ionicons } from "@expo/vector-icons";

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextHandlerGuess.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextHandlerGuess.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
