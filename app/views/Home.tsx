import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header";
import { Menu } from "../sections/Menu";


export interface Props {
  navigation?: Object;
}

export class Home extends React.Component<Props> {
  static navigationOptions = {
    header: null
  };
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <Header message="Tap to login" /> */}
        <Menu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
