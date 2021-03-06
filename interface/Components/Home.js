import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Header from './Header'
import Menu from './Meals'
import { useColorScheme } from 'react-native-appearance'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setObj } from '../redux/actions'

export default function Home({ navigation, steps, setSteps, setLoggedIn }) {
  let colorScheme = useColorScheme()

  const { obj } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <Header navigation={navigation} setLoggedIn={setLoggedIn} />
      <View style={styles.circlesContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: -50,
          }}>
          <View style={styles.circleTile}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('WalkSteps')}>
              <AnimatedCircularProgress
                size={110}
                width={12}
                lineCap={'round'}
                fill={steps <= 5 ? 5 : steps}
                tintColor='#FF8C53'
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor='rgba(80,80,80,0.3)'
                backgroundWidth={13}
              />
              <Image source={require('../assets/icons/walk.png')} style={styles.circleIcon} />
              <Text style={styles.stepsText}>{steps} Steps</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.circleTile}>
            <AnimatedCircularProgress
              size={110}
              width={12}
              lineCap={'round'}
              fill={55}
              tintColor='#FF8C53'
              // onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor='rgba(80,80,80,0.3)'
              backgroundWidth={13}
            />
            <Image source={require('../assets/icons/weight.png')} style={styles.circleIcon} />
            <Text style={styles.stepsText}>Weight</Text>
          </View>

          <View style={styles.circleTile}>
            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => navigation.navigate('WalkSteps')}
            >
              <AnimatedCircularProgress
                size={110}
                width={12}
                lineCap={'round'}
                fill={25}
                tintColor='#FF8C53'
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor='rgba(80,80,80,0.3)'
                backgroundWidth={13}
              />
              <Image source={require('../assets/icons/food.png')} style={styles.circleIcon} />
              <Text style={styles.stepsText}>Meals</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginVertical: -100,
        }}>
        <View>
          <TouchableOpacity activeOpacity={0.7} style={styles.tile}>
            <Image source={require('../assets/icons/social_media.png')} style={styles.tileMenuIcon} />
            <Text style={styles.tileText}>Fitness Social</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.tile} onPress={() => navigation.navigate('Workouts')}>
            <Image source={require('../assets/icons/workout.png')} style={styles.tileMenuIcon} />
            <Text style={styles.tileText}>Do a Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tile: {
    borderRadius: 25,
    backgroundColor: 'rgb(80,120,200)',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    width: 330,
    paddingVertical: 12,
  },
  tileText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
  },
  tileMenuIcon: {
    height: 35,
    width: 35,
    marginHorizontal: 10,
  },
  circleTile: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  circleIcon: {
    width: 50,
    height: 50,
    marginVertical: -80,
    tintColor: 'rgb(80,80,80)', //rgb(41, 171, 226) //rgb(255, 140, 83)
    alignSelf: 'center',
  },
  stepsText: {
    color: 'rgb(80,80,80)',
    alignSelf: 'center',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 16,
    marginVertical: 120,
  },
  icon: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
})
