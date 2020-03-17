import React from "react";
import { Home } from "./app/views/Home";
import { Contact } from "./app/views/Contact";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import loggedReducer from "./app/reducers/isLogged";

let store = createStore(
  loggedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function LogoTitle() {
  return (
    <Image
      style={{ minWidth: 64, minHeight: 32 }}
      source={require("./app/img/hiq-logo.png")}
    />
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#444"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerTitle: props => <LogoTitle {...props} />
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
