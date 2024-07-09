import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={styles.apperiance}>
      <Text style={styles.text}>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  apperiance:{
    flex:1,
    alignItems:'center',
   justifyContent:'center',
  },
  text:{
    color:'red',
    fontSize:20,
    fontWeight:'bold',
    
  }
})