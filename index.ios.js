/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
} = React;

var GoogleBookBrowser = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Google Book Browser
        </Text>
        <Text style={styles.label}>
          Find books containing:
        </Text>
        <TextInput
          placeholder="e.g. Music or JavaScript"
          style={styles.textInput} />
      </View>
    );
  }
});

// reminder: Each JSX element needs to be styled directly
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0099CC'
  },

  headline: {
    fontFamily: 'Avenir Next',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 28
  },

  label: {
    fontFamily: 'Avenir Next',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#FFF',
    marginBottom: 8
  },

  textInput: {
    borderColor: '#8D9996',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    padding: 8
  }
});

AppRegistry.registerComponent('GoogleBookBrowser', () => GoogleBookBrowser);
