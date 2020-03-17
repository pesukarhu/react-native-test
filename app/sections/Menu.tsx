import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import login from "../actions/actions";

export interface Props {
  navigate: Function;
}

export function Menu(props) {
  const userInfo = useSelector(state => state);
  const dispatch = useDispatch();

  const loginUser = username => {
    dispatch(login(username, true));
  };

  return (
    <View style={styles.container}>
      {userInfo && userInfo.loggedIn ? (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              props.navigate("Contact");
            }}
          >
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => loginUser("test")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
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
