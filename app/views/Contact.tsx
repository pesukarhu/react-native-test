import React from "react";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
import { Header } from "../sections/Header";
import { TouchableHighlight } from "react-native-gesture-handler";

export interface Props {
  navigation: any;
}
interface State {
  msg: string;
  name: string;
  email: string;
}

export class Contact extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter message",
      name: "Enter name",
      email: "Enter email"
    };
  }
  clearFields = () => this.setState({ name: "", msg: "", email: "" });

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          style={styles.inputs}
        />
        <TextInput
          onChangeText={text => this.setState({ msg: text })}
          value={this.state.msg}
          multiline={true}
          numberOfLines={4}
          style={styles.multiInput}
        />
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          style={styles.inputs}
        />

        <TouchableHighlight
          style={styles.buttons}
          onPress={this.sendMessage}
          underlayColor="#3434"
        >
          <Text>Send Message</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttons}
          onPress={this.clearFields}
          underlayColor="#3434"
        >
          <Text>Reset Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%"
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    borderColor: "#444",
    borderWidth: 1,
    flex: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10
  },
  multiInput: {
    borderColor: "#444",
    borderWidth: 1,
    flex: 3,
    width: "80%",
    paddingTop: 20,
    marginBottom: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});
