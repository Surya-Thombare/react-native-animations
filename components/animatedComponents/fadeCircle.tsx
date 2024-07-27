import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const FadeCircle = () => {

  const opacity = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
  }
  }, [])

  const handleClick = () => {
    opacity.value = withTiming(1, { duration : 200})
  }

  useEffect(() => {
    handleClick()
  }, [])
  

  return (
    <View style={styles.container}> 
      {/* <Pressable onPress={handleClick}> */}
      <Animated.View style={[styles.circle, animatedStyle]}>
      {/* <Text>fade</Text> */}
      </Animated.View>
      {/* </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {

  },
  circle : {
    borderRadius : 50,
    backgroundColor : 'red',
    height : 50,
    width : 50,
    alignItems : 'center',
    justifyContent : 'center',
  }
})

export default FadeCircle