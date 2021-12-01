import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#232634",
  },
  searchInput: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    backgroundColor: "transparent",
    fontSize: 20,
    // height: 44,
    // paddingHorizontal: 10,
    color: "#fff",
  },
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: "#232634",
  },
  searchTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  rightButtonsContainerStyle: {
    alignSelf: "center",
    backgroundColor: "transparent",
  },
});

export default styles;
