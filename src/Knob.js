import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

const Knob = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/up.png')} style={styles.image} />
      <Image source={require('./assets/down.png')} style={styles.image} />
    </View>
  )
}

export default Knob

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
})
