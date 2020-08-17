import React from 'react'
import {StyleSheet, View} from 'react-native'
import {shadowStyle} from './style'

const SLIDER_WIDTH = 300
const KNOB_WIDTH = 70

const Slider1 = () => {
  return (
    <View style={styles.slider}>
      <View style={styles.progress} />
      <View style={styles.knob} />
    </View>
  )
}

export default Slider1

const styles = StyleSheet.create({
  slider: {
    height: KNOB_WIDTH,
    width: SLIDER_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    ...shadowStyle,
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#3f51b5',
    borderRadius: KNOB_WIDTH / 2,
  },
  knob: {
    height: KNOB_WIDTH,
    width: KNOB_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#757de8',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
