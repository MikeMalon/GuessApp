import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredValue, setEnteredValue] = useState("");

  const textInputChange = (text) => {
    setEnteredValue(text);
  };

  function handleReset() {
    setEnteredValue("");
  }

  function handleConfirm() {
    if (enteredValue === "") {
      console.log("Please enter a number!");
      return;
    }

    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    }

    console.log(`Valid number: ${enteredValue}`);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={textInputChange}
        value={enteredValue}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    borderWidth: 1,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
