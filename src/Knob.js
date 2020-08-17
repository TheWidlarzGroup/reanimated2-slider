import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Animated, {useAnimatedStyle} from 'react-native-reanimated'

const Knob = ({isSliding}) => {
  const knobUpStyle = useAnimatedStyle(() => {
    return {
      opacity: isSliding.value ? 1 : 0,
    }
  })

  const knobDownStyle = useAnimatedStyle(() => {
    return {
      opacity: isSliding.value ? 0 : 1,
    }
  })

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/up.png')}
        style={[styles.image, knobUpStyle]}
      />
      <Animated.Image
        source={require('./assets/down.png')}
        style={[styles.image, knobDownStyle]}
      />
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
