import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Components/Home'
import WalkSteps from './Components/WalkSteps'
import BMI from './Components/BMI'
import Meals from './Components/Meals'
import about from './Components/About'
import Workouts from './Components/Workouts'
import { useColorScheme } from 'react-native-appearance'
import { StyleSheet, Image, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createMaterialBottomTabNavigator()

const Stack = createStackNavigator()

export default function TabScreen({ setLoggedIn }) {
  const [steps, setSteps] = React.useState(0)

  const HomeStack = ({ navigation }) => {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(80,80,80,0.3)' }}>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name='Home' children={() => <Home navigation={navigation} steps={steps} setSteps={setSteps} />} />
          <Stack.Screen name='WalkSteps' children={() => <WalkSteps steps={steps} setSteps={setSteps} />} />
          <Stack.Screen name='Workouts' children={() => <Workouts />} />
        </Stack.Navigator>
      </View>
    )
  }

  let colorScheme = useColorScheme()
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='HomeStack'
        sceneAnimationEnabled={false}
        activeColor='rgb(80,120,200)'
        barStyle={{ backgroundColor: 'rgb(250,250,250)' }} 
        shifting={true}
        labeled={false}>
        <Tab.Screen
          name='HomeStack'
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/home.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            ),
            // tabBarColor: 'rgb(50,30,0)'
          }}
        />

        <Tab.Screen
          name='Calories'
          component={Meals}
          options={{
            tabBarLabel: 'Calories',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/calories.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='BMI'
          component={BMI}
          options={{
            tabBarLabel: 'BMI',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/weight_scale.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='about'
          component={about}
          options={{
            tabBarLabel: 'BMI',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/icons/info.png')}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
