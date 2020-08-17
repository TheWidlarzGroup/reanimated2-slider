import React from 'react'
import {StyleSheet, View} from 'react-native'

import Slider1 from './Slider1'
// import Slider2 from './Slider2'
// import Slider3 from './Slider3'

const App = () => {
  return (
    <View style={styles.container}>
      <Slider1 />
      {/* <View style={{margin: 50}} />
      <Slider2 /> */}
      {/* <View style={{margin: 50}} />
      <Slider3 /> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
