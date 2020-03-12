import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { StackNavigator } from "react-navigation";

export interface Props {
  navigation: StackNavigator;
}
export class Menu extends React.Component<Props> {
  onPress = () => {
    Alert.alert("You tapped the button");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigate(ContactRT)}
          >
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#999"
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  buttonStyle: {
    backgroundColor: "#444",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});
