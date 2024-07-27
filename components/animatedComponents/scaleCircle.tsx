import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const ScaleCircle = () => {

  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform : [{ scale: scale.value}]
  }
  }, [])

  const handleClick = () => {
    scale.value = withTiming(scale.value + 0.3)
  }

  return (
    <View style={styles.container}> 
      <Pressable onPress={handleClick}>
      <Animated.View style={[styles.circle, animatedStyle]}>
      <Text>click</Text>
      </Animated.View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {

  },
  circle : {
    borderRadius : 50,
    backgroundColor : 'yellow',
    height : 50,
    width : 50,
    alignItems : 'center',
    justifyContent : 'center',
  }
})

export default ScaleCircle