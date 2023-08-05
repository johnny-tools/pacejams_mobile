import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const SettingsStack = createNativeStackNavigator();

export function SettingsStackScreen(){
  
  return (
    <SettingsStack.Navigator>
    <SettingsStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: '#3f068f',
          },
          headerTintColor: '#b19bd1',
        }}
        />
   </SettingsStack.Navigator>
  )
};

export function SettingsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.ProfileButton}
      >
      <View style={styles.row}> 
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.buttonText}>{'>'}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    // backgroundColor: '#110323',
  },
  ProfileButton: {
    padding: 10,
    backgroundColor: '#110323',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    backgroundColor: '#110323',
  }
});
