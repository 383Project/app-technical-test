import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  jCenter: {
    justifyContent: 'center',
  },
  aCenter: {
    alignItems: 'center',
  },
  col1: {
    flex: 1,
  },
  col2: {
    flex: 2,
  },
  col3: {
    flex: 3,
  },
  col4: {
    flex: 4,
  },
  col5: {
    flex: 5,
  },
  primaryText: {
    color: "#d3d4d6",
    fontSize: 16,
  },
  secondaryText: {
    color: "#7b7d85",
    fontSize: 16,
  },
  iconYellow: { color: "#cd8127" },
  iconBlue: { color: "#3785c1" },
  iconLight: { color: "#919196" },
  imageIcon: {
    width: 45,
    height: 45,
  }
});

export default styles;
