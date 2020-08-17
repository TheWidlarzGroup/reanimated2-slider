import React from 'react'
import {StyleSheet, View} from 'react-native'
import {shadowStyle} from './style'
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'

const SLIDER_WIDTH = 300
const KNOB_WIDTH = 70

const Slider1 = () => {
  const translateX = useSharedValue(0)
  const isSliding = useSharedValue(false)

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx) => {
      isSliding.value = true
      translateX.value = event.translationX + ctx.offsetX
    },
    onEnd: () => {
      isSliding.value = false
    },
  })

  return (
    <View style={styles.slider}>
      <View style={styles.progress} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={styles.knob} />
      </PanGestureHandler>
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
