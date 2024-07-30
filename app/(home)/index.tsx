import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import ScaleCircle from '@/components/animatedComponents/scaleCircle';
import FadeCircle from '@/components/animatedComponents/fadeCircle';
import Wobble from '@/components/animatedComponents/wobble';
import WobbleClick from '@/components/animatedComponents/wobbleClick';
import Move from '@/components/animatedComponents/move';
import AnimatedModalExample from '@/components/animatedComponents/animatedModal';
import BottomAnimatedModal from '@/components/animatedComponents/bottomModal';


const Home = () => {
  return (
    <SafeAreaView style={{ padding : 20}}>
      <View style={styles.container}>

      <Text>Home</Text>
      {/* <ScaleCircle />
      <FadeCircle />
      <Wobble />
      <WobbleClick />
      <Move width={200} /> */}
      <AnimatedModalExample />
      <BottomAnimatedModal />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    padding : 'auto',
    margin : 'auto',
    flexDirection : 'column',
    gap: 5
  }
})

export default Home