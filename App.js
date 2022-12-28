import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from "./navigation/drawerNavigation";

export default function App() {
  return (
    
      <NavigationContainer>
        <DrawerNavigator></DrawerNavigator>
      </NavigationContainer>
  );
}


