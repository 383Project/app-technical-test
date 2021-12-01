import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import Feather from "react-native-vector-icons/Feather";
import styles from "./PageHeader.style";

const PageHeader = ({ backArrow, title, CenterComponent }) => {
  return (
    <View style={styles.container}>
      {backArrow && (
        <TouchableOpacity onPress={() => Actions.pop()} style={styles.backArrowContainer}>
          <Feather name="arrow-left" size={23} color="#fff" />
        </TouchableOpacity>
      )}
      <View style={styles.centerContainer}>
        {title ? <Text style={styles.title}>{title}</Text> : CenterComponent}
      </View>
    </View>
  );
};

export default PageHeader;
