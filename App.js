import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Add from './Pages/add';
import Edit from './Pages/update';
import Home from './Pages/home';
import Views from './Pages/view';


export default function App() {
  const Stack= createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen name='home' component={Home}></Stack.Screen>
<Stack.Screen name='add' component={Add}></Stack.Screen>
<Stack.Screen name='view' component={Views}></Stack.Screen>
<Stack.Screen name='edit' component={Edit}></Stack.Screen>





      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
