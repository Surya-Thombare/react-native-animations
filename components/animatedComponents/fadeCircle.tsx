import { View, StyleSheet, Pressable, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const FadeCircle = () => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  const handleClick = () => {
    // Toggle opacity between 0 and 1
    opacity.value = withTiming(opacity.value === 1 ? 0 : 1, { duration: 2000 });
  };

  useEffect(() => {
    // Trigger animation on mount
    handleClick();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, animatedStyle]}>
        {/* Add Text or Pressable here if needed */}
      </Animated.View>
      <Button title="fade" onPress={handleClick} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Ensure container takes full space if needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: 50,
    backgroundColor: 'red',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FadeCircle;
