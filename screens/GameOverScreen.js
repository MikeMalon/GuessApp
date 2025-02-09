import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ number, onNewGame }) {
  return (
    <View style={styles.GameOverContainer}>
      <Text style={styles.gameOverText}>Your number is {number}!</Text>
      <PrimaryButton
        onPress={() => {
          onNewGame;
        }}
      >
        NEW GAME
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverText: {
    fontSize: 36,
    marginTop: 24,
    color: "#050303",
    fontWeight: "bold",
    textAlign: "center",
  },
  GameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
