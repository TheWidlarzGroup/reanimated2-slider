import React from 'react'
import {StyleSheet, View} from 'react-native'
import {shadowStyle} from './style'

const SLIDER_WIDTH = 300
const KNOB_WIDTH = 30

const Slider3 = () => {
  return (
    <View style={styles.slider}>
      <View style={styles.progress} />
      <View style={styles.knob} />
    </View>
  )
}

export default Slider3

const styles = StyleSheet.create({
  slider: {
    height: 10,
    width: SLIDER_WIDTH,
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: 25,
    ...shadowStyle,
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#4db6ac',
    borderRadius: 25,
  },
  knob: {
    height: KNOB_WIDTH,
    width: KNOB_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#26a69a',
  },
})
