import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#232634",
  },
  headContainer: {
    // backgroundColor: '#2e3341',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#232634",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  colContainer: { flex: 3 },
  sepContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  textLabel: {
    // fontWeight: "bold",
    fontStyle: "italic",
  },
  textValue: {
    textAlign: "right",
  },
  rightButtonsContainerStyle: {
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  lineSeparator: {
    borderWidth: 1,
    marginVertical: 10,
    borderColor: "#cccccc89",
  },
  imageIcon: {
    width: 60,
    height: 60,
  }
});

export default styles;
