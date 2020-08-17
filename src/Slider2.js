import React from 'react'
import {StyleSheet, View, Alert, Button} from 'react-native'
import {shadowStyle} from './style'
import Knob from './Knob'
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withTiming,
  Easing,
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

  const backgroundStyle = useAnimatedStyle(() => {
    const R = Math.round(
      interpolate(
        translateX.value,
        [0, SLIDER_RANGE],
        [129, 3],
        Extrapolate.CLAMP,
      ),
    )
    const G = Math.round(
      interpolate(
        translateX.value,
        [0, SLIDER_RANGE],
        [212, 169],
        Extrapolate.CLAMP,
      ),
    )
    const B = Math.round(
      interpolate(
        translateX.value,
        [0, SLIDER_RANGE],
        [250, 244],
        Extrapolate.CLAMP,
      ),
    )

    const backgroundColor = `rgb(${R},${G},${B})`
    return {
      backgroundColor,
    }
  })

  return (
    <>
      <View style={styles.slider}>
        <Animated.View
          style={[styles.progress, progressStyle, backgroundStyle]}
        />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.knobContainer, scrollTranslationStyle]}>
            <Knob isSliding={isSliding} rotateStyle={rotateStyle} />
          </Animated.View>
        </PanGestureHandler>
      </View>

      <View style={{marginTop: 40}}>
        <AnimatedText text={stepText} />
      </View>

      <View style={{marginTop: 60}}>
        <Button
          title="Slide to beginning"
          onPress={() => {
            isSliding.value = true
            translateX.value = withTiming(0, {
              duration: 3000,
              easing: Easing.bounce,
            })

            setTimeout(() => {
              isSliding.value = false
            }, 3000)
          }}
        />
        <Button
          title="Slide to end"
          onPress={() => {
            isSliding.value = true

            translateX.value = withTiming(SLIDER_RANGE, {
              duration: 1000,
              easing: Easing.linear,
            })

            setTimeout(() => {
              isSliding.value = false
            }, 1000)
          }}
        />
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
