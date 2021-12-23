import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { configureStore } from '@reduxjs/toolkit';

import HomeScreen from './screen/HomeScreen';
import FlatListScreen from './screen/FlatListScreen';
import BigTableScreen from './screen/BigTableScreen';

const MainStack = createNativeStackNavigator()

const MainFuncGroup = (props:any) => {
  return (
    <MainStack.Navigator initialRouteName='home'>
      <MainStack.Screen name="home" component={HomeScreen} 
        options={{
          title:"Home Screen",
          headerLeft: () => (
            <Button title="Good" onPress={() => alert('Good')}/>
          ),
          headerRight: () => (
            <Button title="Bad"/>
          ),
        }}/>
      <MainStack.Screen name="flatlist" component={FlatListScreen}/>
      <MainStack.Screen name="bigtable" component={BigTableScreen}/>
    </MainStack.Navigator>
  )
}

const store = configureStore({
  reducer: (state, action) => {
    return state
  },
})

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainFuncGroup/>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>

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


