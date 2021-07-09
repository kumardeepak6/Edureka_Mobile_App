import React,{ useState} from 'react';
import { StyleSheet } from 'react-native';
import {Provider} from 'react-redux'
import store  from './Store'
import Navbar from "./Components/Navbar";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    
    <SafeAreaProvider>
    
          <Provider store={store}>
            <Navbar></Navbar>
          </Provider>
          </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeading:{
    marginTop:20,
    fontWeight:"bold",
    color:"red",
    fontSize:30
  }
});
