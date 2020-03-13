import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header";

export class Contact extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Header message="Tap to login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
