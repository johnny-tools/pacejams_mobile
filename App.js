import React from 'react';
import Main from './screens/MainComponent';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingRight: 25,
    // borderRadius: 5,
  },
});

export default App;
