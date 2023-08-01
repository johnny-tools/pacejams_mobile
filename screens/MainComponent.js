import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';

import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon
                name='cog'
                type='font-awesome'
                color='black'
                size={24}
                style={styles.tabIcon}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#3f068f',
          },
          headerTintColor: '#b19bd1',
        }}
      />
      <HomeStack.Screen name='Profile' component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

const LibraryStack = createNativeStackNavigator();

function LibraryStackScreen({ navigation }) {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon
            name='user'
            type='font-awesome'
            color='black'
            size={24}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name='Library'
        component={LibraryScreen}
        options={{
          headerStyle: {
            backgroundColor: '#3f068f',
          },
          headerTintColor: '#b19bd1',
          //       headerRight: () => (
          //         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          //           <Icon
          //             name='user'
          //             type='font-awesome'
          //             color='black'
          //             size={24}
          //             style={styles.tabIcon}
          //           />
          //         </TouchableOpacity>
          //       ),
        }}
      />
      {/* <LibraryStack.Screen name="Profile" component={ProfileScreen} /> */}
    </LibraryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => <Icon name='home' type='font-awesome' />,
          }}
        />
        <Tab.Screen
          name='Library'
          component={LibraryStackScreen}
          options={{
            tabBarIcon: () => <Icon name='book' type='font-awesome' />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    paddingRight: 25,
    // borderRadius: 5,
  },
  headerIcon: {
    paddingLeft: 25,
    // borderRadius: 5,
  },
});
