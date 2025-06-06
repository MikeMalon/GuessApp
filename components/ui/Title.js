import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    borderRadius: 8,
  },
});

export default Title;
