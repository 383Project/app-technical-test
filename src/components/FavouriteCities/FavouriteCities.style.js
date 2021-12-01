import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 0,
    overflow: 'scroll',
  },
  itemContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 4, 
    borderWidth: 1, 
    borderColor: '#cccccc',
  },
  itemText: {
    padding: 5, 
    color: '#ccc', 
    fontSize: 12,
    marginRight: 10,
  },
  clearBtn: {
    padding: 5, 
    borderLeftWidth: 1,
    borderColor: '#cccccc'
  }
});

export default styles;
