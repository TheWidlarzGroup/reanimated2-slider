import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {shadowStyle} from './style'
import Knob from './Knob'

const SLIDER_WIDTH = 300
const KNOB_WIDTH = 30
const STEP = 100
const SLIDER_RANGE = SLIDER_WIDTH - KNOB_WIDTH

const Slider2 = () => {
  return (
    <>
      <View style={styles.slider}>
        <View style={styles.progress} />
        <View style={styles.knobContainer}>
          <Knob />
        </View>
      </View>

      <View style={{marginTop: 40}}>
        <Text>0</Text>
      </View>
    </>
  )
}

export default Slider2

const styles = StyleSheet.create({
  slider: {
    height: 20,
    width: SLIDER_WIDTH,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    ...shadowStyle,
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#87ceeb',
    borderRadius: 25,
  },
  knobContainer: {
    height: KNOB_WIDTH,
    width: KNOB_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
