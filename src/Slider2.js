import React from 'react'
import {StyleSheet, View, Alert} from 'react-native'
import {shadowStyle} from './style'
import Knob from './Knob'
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'
import {useSlider} from './useSlider'
import AnimatedText from './AnimatedText'

const SLIDER_WIDTH = 300
const KNOB_WIDTH = 30
const STEP = 100
const SLIDER_RANGE = SLIDER_WIDTH - KNOB_WIDTH

const Slider2 = () => {
  const onDragCompleteHandler = () => {
    Alert.alert(stepText.value, String(translateX.value))
  }

  const {
    onGestureEvent,
    values: {translateX, isSliding, stepText},
    styles: {scrollTranslationStyle, progressStyle},
  } = useSlider(SLIDER_WIDTH, KNOB_WIDTH, onDragCompleteHandler, STEP)

  const rotateStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SLIDER_RANGE],
      [0, 8 * Math.PI],
      Extrapolate.CLAMP,
    )

    return {
      transform: [{rotate}],
    }
  })

  return (
    <>
      <View style={styles.slider}>
        <Animated.View style={[styles.progress, progressStyle]} />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.knobContainer, scrollTranslationStyle]}>
            <Knob isSliding={isSliding} rotateStyle={rotateStyle} />
          </Animated.View>
        </PanGestureHandler>
      </View>

      <View style={{marginTop: 40}}>
        <AnimatedText text={stepText} />
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
