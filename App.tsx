
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import 'react-native-reanimated';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}









// export default function App() {

  // let [ fontsLoaded ] = useFonts({
  //   Jost_400Regular,
  //   Jost_600SemiBold,
  //   Jost_700Bold
  // });
  // if (!fontsLoaded)
  // return <AppLoading />

//   return (
//     <NavigationContainer>
//       <AuthProvider>
//           <Routes />
//       </AuthProvider>
//     </NavigationContainer>
//   );
// }


