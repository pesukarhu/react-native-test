import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export interface Props {
  message?: string;
}

interface State {
  isLoggedIn: boolean;
}

export class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };
  render() {
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.headLogo}
          source={require("../img/hiq-logo.png")}
        />
        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle: {
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#444",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headText: {
    textAlign: "right",
    color: "#FFF",
    fontSize: 20,
    flex: 4
  },
  headLogo: {
    flex: 1,
    minHeight: 35
  }
});
