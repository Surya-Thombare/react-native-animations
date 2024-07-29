import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
const { height } = Dimensions.get('window');
const BottomAnimatedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const translateY = useSharedValue(height * 0.6);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: (y) => (translateY.value = y) } }],
    { useNativeDriver: false }
  );
  const handleGestureEnd = () => {
    if (translateY.value > height * 0.3) {
      closeModal();
    } else {
      openModal();
    }
  };
  const openModal = () => {
    translateY.value = withSpring(0, { damping: 12 });
    setIsOpen(true);
  };
  const closeModal = () => {
    translateY.value = withSpring(height * 0.6, { damping: 12 });
    setIsOpen(false);
  };
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
        <Animated.View style={[styles.modal, animatedStyle]}>
          <View style={styles.handle}>
            <Text style={styles.handleText}>Swipe down to close</Text>
          </View>
          <View style={styles.modalContent}>
            <Text>Modal Content</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  handle: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#ccc',
  },
  handleText: {
    fontSize: 12,
    color: '#666',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BottomAnimatedModal;









