import {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'
import {clamp} from './utils'

export const useSlider = (
  sliderWidth,
  knobWidth,
  onDraggedSuccess,
  maxRange = 10,
  initialValue = 0,
) => {
  const SLIDER_RANGE = sliderWidth - knobWidth
  const STEP = SLIDER_RANGE / maxRange ?? 1

  const translateX = useSharedValue(STEP * initialValue)
  const isSliding = useSharedValue(false)

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx) => {
      isSliding.value = true

      translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        SLIDER_RANGE,
      )
    },
    onEnd: () => {
      isSliding.value = false

      if (translateX.value > SLIDER_RANGE - 3) {
        onDraggedSuccess()
      }
    },
  })

  const scrollTranslationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: translateX.value}]}
  })

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + knobWidth,
    }
  })

  const stepText = useDerivedValue(() => {
    const step = Math.ceil(translateX.value / STEP)
    return String(step)
  })

  return {
    onGestureEvent,
    values: {
      isSliding,
      translateX,
      stepText,
    },
    styles: {
      scrollTranslationStyle,
      progressStyle,
    },
  }
}
