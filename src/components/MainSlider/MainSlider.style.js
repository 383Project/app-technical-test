import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    marginBottom: 20,
  },
  container: {
    padding: 20,
    backgroundColor: "#2e3341",
    borderRadius: 10,
  },
  headerContainer: {
      marginVertical: 5,
  },
  title: {
    fontSize: 18,
    color: "#8c8e96",
  },
  bodyContainer: {
      marginVertical: 5,
  },
  subTitle: {
    fontSize: 16,
    color: "#a8a9b0",
  },
  floatingIcon: {
    position: 'absolute',
    zIndex: 999,
    right: 0,
    top: -5,
    // backgroundColor: '#eadddd20',
    borderRadius: 20,
    padding: 5,
  },
  saveBtn: {
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10,
    backgroundColor: '#cccccc1c', 
    alignItems: 'center'
  },
  saveText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default styles;
