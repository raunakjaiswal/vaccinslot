import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  containergreen: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    backgroundColor: "#b3ffb3",

  },
  containerred: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    backgroundColor: "#ff9999",

  },
  available: {
    color: "green",
  },
});

export default styles;
