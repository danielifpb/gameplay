import React from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import {Inter_400Regular, Inter_500Medium}  from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { Background } from './src/components/Background'; 
import { COLLECTION_USERS, COLLECTION_APPOINTMENTS } from './src/configs/database';

export default  function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  /*----------------------LIMPAR O CACHE ----------------------------*/
  //AsyncStorage.removeItem(COLLECTION_USERS);
  //AsyncStorage.removeItem(COLLECTION_APPOINTMENTS);
  /*------------------------------------ ----------------------------*/


  return(
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
  )
};