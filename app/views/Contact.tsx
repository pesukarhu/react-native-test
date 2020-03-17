import React from "react";
import { StyleSheet, Text, View, Alert, TextInput } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export function Contact(props) {
  let formData = {
    msg: "Enter message",
    name: "Enter name",
    email: "Enter email"
  };

  const userInfo = useSelector(state => state);

  const clearFields = () => this.setState({ name: "", msg: "", email: "" });

  const sendMessage = () => {
    Alert.alert(formData.name, formData.msg);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello {userInfo.username}, please contact us
      </Text>

      <TextInput value={formData.name} style={styles.inputs} />
      <TextInput
        value={formData.msg}
        multiline={true}
        numberOfLines={4}
        style={styles.multiInput}
      />
      <TextInput value={formData.email} style={styles.inputs} />

      <TouchableHighlight
        style={styles.buttons}
        onPress={sendMessage}
        underlayColor="#3434"
      >
        <Text>Send Message</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttons}
        onPress={clearFields}
        underlayColor="#3434"
      >
        <Text>Reset Form</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%"
  },
  heading: {
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
    marginTop: 15
  }
});
