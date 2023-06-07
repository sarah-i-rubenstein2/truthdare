import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 🌹Truth/Dare Gamez🌹</h1>
        <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button title="Truth"/>
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
