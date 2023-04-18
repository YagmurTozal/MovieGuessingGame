import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AvatarSelectionScreen from './src/screens/AvatarSelectionScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
// import CreateRoomScreen from './src/screens/CreateRoomScreen';
// import JoinRoomScreen from './src/screens/JoinRoomScreen';
// import GameScreen from './src/screens/GameScreen';
// import OptionsScreen from './src/screens/OptionsScreen';
// import GameOverScreen from './src/screens/GameOverScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeAbroad" component={WelcomeScreen} options={{ headerShown: false }} />

        <Stack.Screen name="AvatarSelection" component={AvatarSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="CreateRoom" component={CreateRoomScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JoinRoom" component={JoinRoomScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Options" component={OptionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GameOver" component={GameOverScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
