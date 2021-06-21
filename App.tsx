
import React from 'react';

// import 'react-native-gesture-handler';
// import React from 'react';
// import Routes from './src/routes';
// import AppLoading from 'expo-app-loading';
// import { useFonts, Jost_400Regular, Jost_600SemiBold, Jost_700Bold } from '@expo-google-fonts/jost';
// import { AuthProvider } from './src/components/AuthContext';

import { SignIn } from './src/screens/SignIn';



export default function App() {
  return (
   <SignIn />

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


