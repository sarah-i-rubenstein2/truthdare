import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import './App.css';
import axios from 'axios';


function App() {
  const test = async () => {
    /*
    * Note to Ryan:
    * Change the "type" attribute based on what you want:
    * "truth" = truth
    * "dare" = dare
    * "wyr" = would you rather
    * "nhie" = never have i ever
    * "paranoia" = paranoia
    */
    let info = {
      type: "truth"
    };
    let response = await axios.post("http://localhost:3000/",{ info });
    console.log("response: ", response);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🌹Truth/Dare Gamez🌹</h1>
        <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button title="Truth" onPress={test}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Dare"/>
              </View>
            </View>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default App;
