import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const AnimatedModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  const openModal = (x: number, y: number) => {
    translateX.value = x - width / 2 + 100; // Adjust for the modal size
    translateY.value = y - height / 2 + 100; // Adjust for the modal size
    opacity.value = 0;
    scale.value = 0.5;
    setModalVisible(true);

    // Animate to center
    translateX.value = withTiming(0, { duration: 300 });
    translateY.value = withTiming(0, { duration: 300 });
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withTiming(1, { duration: 300 });
  };

  const closeModal = () => {
    opacity.value = withTiming(0, { duration: 300 }, () => {
      setModalVisible(false);
    });
    scale.value = withTiming(0.5, { duration: 300 });
    translateX.value = withTiming(width / 2 - 100, { duration: 300 });
    translateY.value = withTiming(height / 2 - 100, { duration: 300 });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={({ nativeEvent }) => openModal(nativeEvent.pageX, nativeEvent.pageY)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open Story</Text>
      </Pressable>

      {modalVisible && (
        <Animated.View style={[styles.modal, animatedStyle]}>
          <Pressable onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
          <Text style={styles.modalText}>Story Content</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  modalText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AnimatedModalExample;
