/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);

import Root from "./Root";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
